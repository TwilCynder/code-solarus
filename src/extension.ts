// The module 'vscode' contains the VS Code extensibility API
import * as vscode from 'vscode';

// called when the extension is activated
export function activate(context: vscode.ExtensionContext) {

	console.log('code-solarus is now active');
	vscode.window.showInformationMessage("The CodeSolarus extension is now active.");
		
	let disposable = vscode.commands.registerCommand('extension.activate', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
