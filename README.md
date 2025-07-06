# agro-ai---crop-disease-detector
# 🌿 AGRO AI: INTEGRATING TENSORFLOW AND FLASK FOR ENHANCED PLANT DISEASE DIAGNOSIS

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Built with: TensorFlow + Flask](https://img.shields.io/badge/Built%20With-TensorFlow%20%7C%20Flask-blue)

Agro AI is a deep learning-powered web application that allows farmers and agricultural experts to detect plant diseases from leaf images in real time. The system uses Convolutional Neural Networks (CNN) trained on diverse crop datasets and integrates them into a Flask-based web app for scalable and accurate plant health diagnosis.

---

## 🔍 Features

- 🌿 Real-time plant disease classification using leaf images
- 📷 Image upload interface via Flask web application
- 🧠 CNN model trained with transfer learning and data augmentation
- 🧾 Detailed disease descriptions and treatment recommendations
- 🌍 Scalable and user-friendly for rural or low-resource settings
- 🖥️ Built with Python, TensorFlow, and Flask

---

## 🧠 Model Summary

The model classifies images into 38 classes of healthy and diseased plants such as:
- Tomato – Bacterial Spot, Early Blight, Late Blight, Leaf Mold, Yellow Curl Virus
- Apple – Black Rot, Cedar Apple Rust
- Corn – Rust, Leaf Blight
- Grape, Potato, Pepper, Orange, etc.

---

## 🛠 Folder Structure

AGRO_AI/
├── app.py                          # Main Flask application
├── import jedi.py                  # Utility or helper script
├── model_development.ipynb         # Jupyter notebook for model training
├── plant_disease_prediction_model.h5  # Trained CNN model
├── LICENSE                         # MIT license file
├── README.md                       # Project overview

├── results/                        # Sample prediction result images
│   ├── imgupload.jpg
│   ├── potatoplant.jpg
│   ├── spottedleaf.jpg
│   └── webpage.jpg

├── static/                         # Static assets for web app
│   ├── css/
│   │   └── styles.css
│   ├── images/
│   │   ├── farm-background.jpg
│   │   └── placeholder-crop.jpg
│   ├── js/
│   │   └── app.js
│   └── uploads/
│       ├── test_1.jpg
│       └── test_2.jpg

├── templates/                      # HTML templates for Flask rendering
│   ├── app.html
│   └── result.html

├── report/                         # Report
│   ├── project_final.pdf


---

## 🖥️ Technologies Used

- 💻 **Backend**: Python, Flask
- 🎨 **Frontend**: HTML, CSS, Jinja2 Templates
- 🧠 **Deep Learning**: TensorFlow / Keras (CNN)
- 🧪 **Development Tools**: Jupyter Notebook, VS Code

---

## 🚀 How to Run Locally

1. **Clone the repo**  
   ```bash
   git clone https://github.com/vishal-r-v/agro-ai---crop-disease-detector.git
   cd agro-ai

2. Install dependencies
   pip install -r requirements.txt

3. Place model file
   Put your trained model file as:
   plant_disease_prediction_model.h5

4.Run the app
   python app.py

5.Use
   Open browser at http://127.0.0.1:5000, 
   upload a leaf image, 
   and get results.

---

📸 Screenshots
Upload your screenshots inside static/ and update the paths here.


Figure: Leaf upload interface


Figure: Predicted result with treatment info

---

📄 Project Report

You can find the full detailed PDF report at:
📄 project_final.pdf

Includes:

-Abstract, Objectives, Methodology

-Dataset and Model Architecture

-UI Snapshots

-Test Cases & Metrics

-Conclusion and Future Enhancements

---

📜 License
This project is licensed under the MIT License — see the LICENSE file for details.

---

👨‍💻 Author

vishal r v

🎓 Project submitted to SRM Institute of Science and Technology, Ramapuram, Chennai under the guidance of Ms. Malathi P, M.E., Ph.D.
