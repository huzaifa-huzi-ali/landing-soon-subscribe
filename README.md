# landing-soon-subscribe
A simple and responsive "Coming Soon" landing page with email subscription form, built using HTML, CSS, and JavaScript. Collects user emails via Google Sheets integration.


## ✨ Features
- 📱 Fully responsive design for mobile & desktop
- 📩 Email subscription form connected with Google Sheets
- ⚡ Lightweight and fast (HTML, CSS, JS only)
- 🔒 Prevents page reload on form submission
- ✅ Displays success message after subscribing
- 🎨 Simple, customizable UI for any brand

---
## 📂 Project Structure
/E-mail subscription form
│── index.html # Main landing page
│── style.css # Styling (responsive layout, animations)
│── script.js # Handles subscription form submission
│── assets/ # Images, icons, etc.

yaml
Copy
Edit
---

## ⚙️ How It Works
1. Users enter their email in the subscription form.
2. On submit (or pressing **Enter**), data is sent via **Google Apps Script**.
3. Emails are stored directly in your connected **Google Sheet**.
4. A success message is shown without reloading the page.

---

## 🚀 Setup Instructions
### 1. Clone the Repository
```bash
git clone https://github.com/your-username/landing-soon-subscribe.git
cd landing-soon-subscribe
