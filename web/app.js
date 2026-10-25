"use strict";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const STORAGE = {
  layout: "origo.shell.layout.v1",
  mode: "origo.shell.mode.v1",
  observer: "origo.shell.observer.v1",
  signals: "origo.shell.signals.v1"
};

const defaults = ["field", "mode", "notes", "observer"];

function readStored(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : JSON.parse(value);
  } catch {
    return fallback;
  }
}

function writeStored(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

function setMode(mode) {
  const isCode = mode === "code";
  const title = isCode ? "CODE" : "SIGNAL";

  $("#page-title").textContent = mode === "workspace" ? "WORKSPACE" : title;
  $("#welcome-title").innerHTML = mode === "workspace"
    ? 'A place to <span>begin.</span>'
    : isCode
      ? 'Build with <span>intention.</span>'
      : 'Follow the <span>signal.</span>';

  $("#welcome-description").textContent = mode === "workspace"
    ? "Your workspace. Your arrangement. Your direction."
    : isCode
      ? "A space for software construction. Execution is not connected yet."
      : "A space for questions, evidence, connections, and what remains unknown.";

  $$("[data-mode]").forEach((button) => {
    const selected = button.dataset.mode === mode;
    button.classList.toggle("active", button.classList.contains("nav-item") && selected);
    if (button.classList.contains("mode-card")) {
      button.classList.toggle("selected", selected);
    }
  });

  writeStored(STORAGE.mode, mode);
}

function getLayout() {
  const stored = readStored(STORAGE.layout, defaults);
  if (!Array.isArray(stored)) return [...defaults];

  const known = new Set(defaults);
  const valid = stored.filter((id) => known.has(id));
  defaults.forEach((id) => {
    if (!valid.includes(id)) valid.push(id);
  });
  return valid;
}

function applyLayout(order) {
  const container = $("#panels");
  order.forEach((id) => {
    const panel = container.querySelector(`[data-panel="${id}"]`);
    if (panel) container.appendChild(panel);
  });
}

function setObserver(active) {
  $("#observer-toggle").classList.toggle("paused", !active);
  $("#observer-toggle").setAttribute("aria-pressed", String(active));
  $("#observer-icon").textContent = active ? "◉" : "◎";
  $("#observer-label").textContent = active ? "OBSERVER ACTIVE" : "OBSERVER PAUSED";
  $("#observer-state").textContent = active
    ? "Observation is active."
    : "Observation is paused.";
  $("#observer-detail").textContent =
    "This is a local interface indicator. No background monitoring service is connected.";
  $("#observer-orb").classList.toggle("paused", !active);
  writeStored(STORAGE.observer, active);
}

function init() {
  applyLayout(getLayout());

  const savedMode = readStored(STORAGE.mode, "workspace");
  setMode(["workspace", "code", "signal"].includes(savedMode) ? savedMode : "workspace");

  setObserver(readStored(STORAGE.observer, true) !== false);

  $$("[data-mode]").forEach((button) => {
    button.addEventListener("click", () => setMode(button.dataset.mode));
  });

  $("#observer-toggle").addEventListener("click", () => {
    const currentlyActive = $("#observer-toggle").getAttribute("aria-pressed") === "true";
    setObserver(!currentlyActive);
  });

  $("#panels").addEventListener("click", (event) => {
    const button = event.target.closest("[data-move]");
    if (!button) return;

    const panel = button.closest("[data-panel]");
    const panels = [...$("#panels").children];
    const index = panels.indexOf(panel);
    const nextIndex = index + Number(button.dataset.move);

    if (nextIndex < 0 || nextIndex >= panels.length) return;

    const other = panels[nextIndex];
    if (nextIndex < index) {
      $("#panels").insertBefore(panel, other);
    } else {
      $("#panels").insertBefore(other, panel);
    }

    writeStored(STORAGE.layout, [...$("#panels").children].map((item) => item.dataset.panel));
  });

  $("#reset-layout").addEventListener("click", () => {
    applyLayout([...defaults]);
    writeStored(STORAGE.layout, defaults);
    $("#capture-message").textContent = "Default panel arrangement restored.";
  });

  $("#save-signal").addEventListener("click", () => {
    const input = $("#signal-input");
    const content = input.value.trim();

    if (!content) {
      $("#capture-message").textContent = "Enter a signal before saving.";
      input.focus();
      return;
    }

    const signals = readStored(STORAGE.signals, []);
    if (!Array.isArray(signals)) {
      $("#capture-message").textContent = "Stored data could not be read safely.";
      return;
    }

    signals.push({
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      content,
      createdAt: new Date().toISOString()
    });

    if (!writeStored(STORAGE.signals, signals)) {
      $("#capture-message").textContent = "Could not save. Browser storage may be unavailable.";
      return;
    }

    input.value = "";
    $("#capture-message").textContent = "Signal saved in this browser.";
    $("#save-status").textContent = `${signals.length} LOCAL SIGNAL${signals.length === 1 ? "" : "S"} SAVED`;
  });

  const signals = readStored(STORAGE.signals, []);
  if (Array.isArray(signals) && signals.length) {
    $("#save-status").textContent = `${signals.length} LOCAL SIGNAL${signals.length === 1 ? "" : "S"} SAVED`;
  }
}

init();
