# ⚡ Energy at Your Feet

**Energy at Your Feet** is an innovative green energy project that converts foot traffic into usable electricity using piezoelectric sensors. Designed for urban environments and smart cities, this compact and modular system encourages sustainable behavior by providing real-time feedback on the energy being generated.


## 🌍 Project Overview

With growing urban populations and rising energy demands, our project offers a sustainable solution by harvesting kinetic energy from footsteps. Whether in public walkways, transport hubs, or schools, every step contributes to a greener planet.

### 🎯 Key Features

- ⚡ **Piezoelectric Energy Harvesting**: Converts mechanical stress (footsteps) into electrical energy.
- 📊 **Real-Time Feedback**: Displays live energy data to users, encouraging green habits.
- 🧱 **Modular Design**: Easily scalable and maintainable—ideal for sidewalks, malls, or event venues.
- 🌱 **Eco-Friendly**: Promotes renewable energy with zero emissions.
- 🏙️ **Smart City Integration**: Can be integrated into IoT platforms and public infrastructure.
- 

## 🔧 Technologies Used

- **Piezoelectric Discs** – To convert mechanical energy into electrical energy.
- **Bridge Rectifiers & Capacitors** – For energy storage and regulation.
- **Microcontrollers (e.g., Arduino)** – For data acquisition and system control.
- **OLED/LED Displays** – To show real-time energy stats.
- **Optional: Wi-Fi/Bluetooth Module** – For IoT data transmission.

## 🚀 Getting Started

### Hardware Setup

1. Connect piezo sensors in parallel with a full-bridge rectifier.
2. Smooth the output using capacitors.
3. Feed the voltage to a microcontroller for processing.
4. Display energy readings using a small display or send to a cloud dashboard.

### Software/Firmware

- Navigate to `firmware/` for Arduino code.
- Upload to your board using Arduino IDE or PlatformIO.

### Dashboard (Optional)

If you're using a real-time UI/dashboard:
```bash
cd software/
npm install
npm start
