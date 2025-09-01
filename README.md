
```markdown
# 📖OptiQuote

A simple and interactive web app that displays random motivational and programming quotes.  
Users can generate new quotes, copy them to the clipboard, and (optionally) share them on Twitter.  

---

## ✨ Features
- 🎲 Generate random quotes with a single click  
- 📝 Displays both **quote text** and **author**  
- 📋 Copy quotes directly to clipboard  
- 🔄 Fetch quotes from a public API or local JSON file  
- 🎨 Clean, responsive design  

---

## 🛠️ Tech Stack
- **HTML5** – Structure  
- **CSS3** – Styling & layout  
- **JavaScript (ES6)** – DOM manipulation & Fetch API  

---


## 📷 Preview
![App Screenshot](screenshot.png)  
*(Add a screenshot of your app here after building it)*

---

## 📂 Project Structure
```

quote-generator/
│── index.html      # Main HTML file
│── style.css       # Styling
│── script.js       # JS logic
│── quotes.json     # (Optional) local quotes
│── README.md       # Documentation

````

---

## ⚡ Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/quote-generator.git
cd quote-generator
````

### 2. Open `index.html`

Simply open the `index.html` file in your browser.
*(If using API fetch, you may need to run a local server like Live Server in VSCode.)*

---

## 🔧 How It Works

1. On page load, the app fetches a random quote.
2. Clicking **"New Quote"** fetches another quote.
3. Clicking **"Copy"** copies the current quote to your clipboard.
4. (Optional) Clicking **"Tweet"** opens Twitter with the quote ready to share.

---

## 📡 APIs Used (choose one)

* [Quotable](https://api.quotable.io/random)
* [ZenQuotes](https://zenquotes.io/api/random)
* [Type.fit Quotes](https://type.fit/api/quotes)

---

## 💡 Future Improvements

* Add category filters (Motivation, Programming, Life)
* Background color changes with each new quote
* Save favorite quotes locally
* Mobile-friendly animations

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to improve.

---

## 📜 License

This project is licensed under the **MIT License**.
