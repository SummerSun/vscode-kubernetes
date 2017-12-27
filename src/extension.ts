'use strict';

import * as vscode from 'vscode';
import { DeploymentManager } from './deploymentManager';

export function activate(context: vscode.ExtensionContext) {
    let deploymentManager = new DeploymentManager();

    context.subscriptions.push(vscode.commands.registerCommand('kubernetes.viewDeployment', () => {
        deploymentManager.viewDeployment();
    }));
}

export function deactivate() { }