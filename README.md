# ORIGO

A sovereign, customizable work environment.

## Foundational principles

- Sovereignty over data and the computing environment.
- Launch directly into the workspace.
- Manual control over workspace arrangement.
- Restore the last saved layout without automatically restarting operations.
- Responsive support for desktop, Chromebook, and mobile.
- Transparent background activity and explicit execution boundaries.
- Preserve continuity independently of any particular coding agent.

## Initial working modes

- CODE — software construction and maintenance.
- SIGNAL — investigation, evidence, questions, and integration.

## Shared continuity

SIGNALWEAVER preserves decisions, questions, dependencies, and project history.
It is a continuity layer, not a separate working mode.

## Initial scope

Build the workspace shell first. Defer agents, external API integrations,
and unnecessary dependencies until the environment's foundation is established.

## ORIGO Shell 0.1.0

The first runnable workspace shell, built with HTML, CSS, and JavaScript.

### Run locally

From the ORIGO project directory:

```bash
python3 -m http.server 8000 --bind 127.0.0.1 --directory web
```

Open http://127.0.0.1:8000 in your browser.

Stop the server with Ctrl+C in the terminal.

### Included

- Workspace with CODE and SIGNAL modes
- Manually reorderable panels
- Browser-local layout and signal persistence
- Observer interface indicator
- Responsive desktop and mobile layouts
- No external services or API connections required

### Current boundaries

Signals and layout preferences use browser local storage.
They are not yet stored in a dedicated database or synchronized
between devices. CODE execution, LUMEN services, and actual
background observation are not connected.

### Release principle

Preserve the distinction between planned, implemented, and verified
capabilities. Truth without fear.
