<div align="center">
<img width="1200" height="475" alt="P.A.G. Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

<div align="center">

# Project Alpha Visualizer (P.A.G.)
**An Internal Operations Tool for Alie Network**

![Project Status](https://img.shields.io/badge/status-active_development-green)
![Framework](https://img.shields.io/badge/framework-React-blue?logo=react)
![AI Model](https://img.shields.io/badge/AI-Gemini_2.5_Flash-purple)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

</div>

P.A.G. is an AI-powered web application that transforms in-depth project analyses (S.A.G.A. Reports) or raw text from Alie Network's **'Alpha Generation Engine'** into compelling marketing materials in seconds.

---

### 🎯 Purpose & Problem Solved

In Alie Network's HUBS (Weekly Application and Growth System) workflow, powerful analysis tools like S.A.G.A. produce raw data and strategic insights. However, converting this valuable data into a persuasive Medium article, a professional presentation, or a viral video required hours of manual and creative effort. This bottleneck slowed our growth rate and consumed valuable team time.

**P.A.G.'s Solution:**
P.A.G. completely automates this process. By taking complex JSON reports or simple concept notes, it leverages the power of **Google Gemini** to generate not only the core content ideas but also cinematic, professional, and artistic visual prompts to support them—all within seconds. This transforms the "content creation" process into a "content refinement and distribution" process.

### 🚀 Core Features

*   **🧠 Intelligent Input Analysis:** Can understand and process both structured S.A.G.A. JSON reports and unstructured plain text.
*   **🎨 Multiple Output Formats:** Generates content for various purposes from a single input:
    *   **Medium Article:** For detailed analyses and infographic concepts.
    *   **Pitch Deck:** For professional slide visuals for client presentations.
    *   **Video Kit:** For cinematic scene concepts for tools like CapCut.
*   **🤖 Advanced Visual Prompt Generation:** All generated visual prompts are written in **English** using cinematic language for maximum quality and compatibility with leading image generation AIs.
*   **📋 Ease of Use:** A "Copy Prompt" button allows for instant use of generated visual ideas in tools like Imagen, Midjourney, and more.
*   **⚡ Fast and Efficient:** Reduces hours of creative work to a matter of seconds.

### 🛠️ Tech Stack

*   **Frontend:** React (TypeScript)
*   **Styling:** Tailwind CSS
*   **AI Engine:** Google Gemini API (`gemini-2.5-flash`)
*   **Deployment:** Vercel

### 🖥️ Live Demo & Screenshot

You can access the live version of the application here: **[project-alpha-agent.vercel.app](https://project-alpha-agent.vercel.app/)**

<!-- Add a screenshot of the application here -->
<div align="center">
  <img src="https://i.imgur.com/gT3L1uH.png" alt="P.A.G. Screenshot" width="800"/>
</div>

---

### 🔧 Local Setup & Running

Follow these steps to run the project on your local machine.

**Prerequisites:**
*   [Node.js](https://nodejs.org/) (v18 or later)
*   A Gemini API Key (You can get one from [Google AI Studio](https://ai.studio.google.com/))

**Installation Steps:**

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/Project-Alpha-Visualizer.git
    cd Project-Alpha-Visualizer
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    *   Create a file named `.env` in the project's root directory.
    *   Add your Gemini API key to it:
        ```
        API_KEY="YOUR_GEMINI_API_KEY_HERE"
        ```

4.  **Run the application:**
    ```bash
    npm run dev
    ```
    The application should now be running on `http://localhost:5173` (or a similar port).

###  workflows/usage-scenario Workflow

P.A.G. integrates into the Alie Network HUBS system as follows:

1.  **Get Data:** Copy the JSON analysis report from the S.A.G.A. Gem.
2.  **Paste & Process:** Paste the report into the P.A.G. text area and click "Process Text".
3.  **Select Format:** Choose one of the output options: "Medium Article", "Pitch Deck", or "Video Kit".
4.  **Generate & Copy:** Copy the generated visual prompts using the "Copy Prompt" button.
5.  **Visualize:** Use the copied prompts in an image generation AI (e.g., Imagen) to create the visuals.
6.  **Assemble:** Combine the generated text ideas and visuals on the target platform (Medium, Canva, CapCut) to create the final marketing asset.

---

### 📈 About Alie Network

**Growth Partner for Web3 Founders.**

Alie Network is a results-driven, risk-tolerant strategy partner that unlocks the growth potential of Web3 projects through data and technology.

*   **📧 Email:** `info@alie.network`
*   **🌐 Website:** `alie.network`
*   **🔗 Linktree:** `linktr.ee/alienetwork`
*   **🐦 X (Twitter):** [@networkAlie](https://x.com/networkAlie)
*   **💼 LinkedIn:** [linkedin.com/in/alienetwork](https://linkedin.com/in/alienetwork)
*   **👨‍💻 GitHub:** [@networkAlie](https://github.com/networkAlie)
*   **▶️ YouTube:** [@networkAlie](https://www.youtube.com/@networkAlie)
*   **👽 Reddit:** [u/networkAlie](https://www.reddit.com/user/networkAlie)

### 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
