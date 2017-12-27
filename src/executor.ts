'use strict';

import { exec, execSync } from 'child_process';
import * as vscode from 'vscode';

export class Executor {
    private static terminal: vscode.Terminal;
    private static KubernetesTerminal = "Kubernetes";

    public static runInTerminal(command: string): void {
        if (this.terminal === undefined) {
            this.terminal = vscode.window.createTerminal(this.KubernetesTerminal);
        }
        this.terminal.show();
        this.terminal.sendText(command);
    }
    public static exec(command: string) {
        return exec(command);
    }

    public static execSync(command: string) {
        return execSync(command, { encoding: "utf8" });
    }

    public static onDidCloseTerminal(closedTerminal: vscode.Terminal): void {
        this.terminal =  undefined;
    }
}