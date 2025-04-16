import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const toggleCommand = vscode.commands.registerCommand(
    "toggleuseclient.toggleUseClient",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        const document = editor.document;
        const firstLine = document.lineAt(0).text.trim();

        if (firstLine !== '"use client";') {
          editor.edit((editBuilder) => {
            editBuilder.insert(new vscode.Position(0, 0), `"use client";\n`);
          });
        } else {
          editor.edit((editBuilder) => {
            editBuilder.delete(new vscode.Range(0, 0, 1, 0));
          });
        }
      }
    }
  );

  const addCommand = vscode.commands.registerCommand(
    "toggleuseclient.addUseClient",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        const document = editor.document;
        const firstLine = document.lineAt(0).text.trim();

        if (firstLine !== '"use client";') {
          editor.edit((editBuilder) => {
            editBuilder.insert(new vscode.Position(0, 0), `"use client";\n`);
          });
        } else {
          vscode.window.showInformationMessage(
            "'use client' is already at the top of the file."
          );
        }
      }
    }
  );

  const removeCommand = vscode.commands.registerCommand(
    "toggleuseclient.removeUseClient",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        const document = editor.document;
        const firstLine = document.lineAt(0).text.trim();

        if (firstLine === '"use client";') {
          editor.edit((editBuilder) => {
            editBuilder.delete(new vscode.Range(0, 0, 1, 0));
          });
        } else {
          vscode.window.showInformationMessage(
            "'use client' not found at the top of the file."
          );
        }
      }
    }
  );

  context.subscriptions.push(toggleCommand, addCommand, removeCommand);
}

// This method is called when your extension is deactivated
export function deactivate() {}
