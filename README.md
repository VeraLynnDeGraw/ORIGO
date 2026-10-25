# ORIGO

**A sovereign, customizable work environment.**

ORIGO is an evolving workspace shell designed around user control,
deliberate arrangement, local continuity, and transparent execution
boundaries.

Its first release is a lightweight web interface built with HTML, CSS,
and JavaScript. The long-term direction is broader, but the current
implementation remains intentionally small.

**Principle:** `VERUM SINE TIMORE` — Truth without fear.

## Project status

- **Current release:** ORIGO Shell 0.1.0
- **Implementation:** Static web interface
- **Runtime requirements:** Python 3 and a modern web browser
- **External services:** None required for the current shell

ORIGO is under active development. Planned features should not be
mistaken for implemented or verified capabilities.

## What works today

- **Workspace:** A central working surface with four rearrangeable panels.
- **CODE mode:** An interface for software construction and inspection.
  Code execution is not connected.
- **SIGNAL mode:** An interface for investigation, questions, observations,
  and ideas.
- **Signal capture:** Save text locally in the browser.
- **Layout persistence:** Preserve panel arrangement between visits in the
  same browser storage context.
- **Preference persistence:** Remember the selected mode and observer
  indicator.
- **Responsive interface:** Adapt the layout for desktop and smaller screens.
- **Manual control:** Rearrange panels or restore the default layout.

## Run locally

### Requirements

- Python 3
- A modern web browser

No third-party Python packages or JavaScript build tools are required
to run the current static shell.

### Start the workspace

From the ORIGO project directory, run:

```bash
python3 -m http.server 8000 --bind 127.0.0.1 --directory web
```

Open the following address in your browser:

http://127.0.0.1:8000

The server binds to `127.0.0.1`, making it accessible through the local
machine rather than directly through the network interface.

To stop the server, press `Ctrl+C` in the terminal.

## Project structure

```text
ORIGO/
├── docs/
│   └── FOUNDATION.md
├── web/
│   ├── index.html
│   ├── app.js
│   └── styles.css
├── CONTRIBUTING.md
├── LICENSE
├── README.md
└── SECURITY.md
```

- `web/index.html` — Workspace structure and interface elements.
- `web/app.js` — Interaction behavior and browser-local persistence.
- `web/styles.css` — Visual design and responsive layout.
- `docs/FOUNDATION.md` — Foundational principles and conceptual boundaries.
- `CONTRIBUTING.md` — Guidance for proposed changes and contributions.
- `SECURITY.md` — Security reporting guidance.
- `LICENSE` — MIT License.

## Data and execution boundaries

The current shell uses browser `localStorage` for signals, layout
preferences, the selected mode, and the observer indicator.

This means:

- Data is associated with the browser's storage context, not a dedicated
  ORIGO database.
- Data is not automatically synchronized between devices.
- Clearing browser site data may remove locally stored signals and
  preferences.
- The current shell does not provide a built-in signal export or backup
  feature.
- The observer toggle changes a local interface indicator; it does not
  activate or pause a monitoring service.
- CODE does not execute commands or run programs.
- LUMEN is not connected to a service or API.
- SIGNALWEAVER remains a planned continuity layer.

The interface is designed to run without external services. If the shell
is later extended with integrations or remote services, their network
activity and permissions should be documented explicitly.

## Foundational principles

ORIGO is guided by the following principles:

1. **Sovereignty** — The user should retain meaningful control over their
   data and computing environment.
2. **Direct access** — Enter the workspace without an unnecessary landing
   screen.
3. **Manual arrangement** — Do not silently rearrange the user's workspace.
4. **Safe restoration** — Restore layout preferences without automatically
   restarting previous commands or operations.
5. **Portability** — Design for desktop, Chromebook, and mobile environments.
6. **Transparency** — Distinguish observation from execution and make
   background activity visible.
7. **Separation of concerns** — Keep the workspace, projects, tools,
   continuity, and execution boundaries distinct.
8. **Epistemic honesty** — Distinguish what is proposed, implemented,
   tested, and still unknown.

See [`docs/FOUNDATION.md`](docs/FOUNDATION.md) for the foundational document.

## Development direction

ORIGO is being developed incrementally. Possible future work includes:

- A clearer project and workspace structure.
- More robust local data management and backup.
- Testing for core interface behavior.
- A defined boundary for command execution and permissions.
- A future LUMEN service integration.
- SIGNALWEAVER for shared continuity across questions, decisions, and
  projects.

These are development directions, not promises that the features
already exist.

## Contributing

Read [`CONTRIBUTING.md`](CONTRIBUTING.md) before proposing a change.
Focused contributions should explain their purpose, testing, and known
limitations.

## Security

Read [`SECURITY.md`](SECURITY.md) for vulnerability reporting guidance.
Do not publish credentials, private keys, tokens, or other sensitive
information in issues or commits.

## License

ORIGO is distributed under the [MIT License](LICENSE), subject to any
applicable file-specific notices.

---

**ORIGO — Built brick by brick.**

*Verum sine timore. Truth without fear.*
