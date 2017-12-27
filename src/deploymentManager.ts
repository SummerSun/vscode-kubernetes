'use strict';

import * as vscode from 'vscode';
import { Executor } from './executor';

export class DeploymentManager {
    public viewDeployment() {
        Executor.runInTerminal("kubectl get deployments");
    }
}