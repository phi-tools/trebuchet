// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn check_brew() -> bool {
    let output = std::process::Command::new("brew")
        .arg("--version")
        .output()
        .expect("failed to execute process");

    output.status.success()
}

#[tauri::command]
fn install_brew() -> String {
    if check_brew() {
        println!("Homebrew is already installed");
        return "Homebrew is already installed".to_string();
    }
    let output = std::process::Command::new("/bin/bash")
        .arg("-c")
        .arg("curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh | bash")
        .output()
        .expect("failed to execute process");

    if output.status.success() {
        String::from_utf8(output.stdout).unwrap()
    } else {
        String::from_utf8(output.stderr).unwrap()
    }
}

#[tauri::command]
fn install_chocolatey() -> Result<String, String> {
    let script_path = "./scripts/install_chocolatey.ps1"; // Adjust the path accordingly
    let output = std::process::Command::new("powershell")
        .args(&[
            "-NoProfile",
            "-ExecutionPolicy",
            "Bypass",
            "-File",
            script_path,
        ])
        .output()
        .map_err(|e| e.to_string())?;

    if output.status.success() {
        Ok(String::from_utf8_lossy(&output.stdout).to_string())
    } else {
        Err(String::from_utf8_lossy(&output.stderr).to_string())
    }
}

fn main() {
    // Print the working directory
    //
    println!(
        "Current working directory: {:?}",
        std::env::current_dir().unwrap()
    );
    tauri::Builder::default()
        .plugin(tauri_plugin_os::init())
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![greet, check_brew, install_brew])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
