const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Set view engine ke EJS
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Data Diri Bintang
const portfolioData = {
    hero: {
        name: "Bintang Anggaraksa L.N.",
        role: "Informatics Student & Tech Enthusiast",
        tagline: "Mengubah logika menjadi solusi cerdas. Dari pengembangan web hingga eksplorasi kecerdasan buatan."
    },
    about: {
        desc: "Saya adalah mahasiswa S1 Informatika di Universitas Diponegoro. Memiliki ketertarikan mendalam pada Fullstack Development dan Artificial Intelligence. Pengalaman saya meliputi pengembangan web modern hingga pemrograman perangkat keras (Arduino) melalui internship di tim Robotik UNDIP (Bandhayudha).",
        interests: ["AI Engineer", "Machine Learning", "Fullstack Dev"],
        hobbies: ["Gaming", "Sport", "Robotics"]
    },
    skills: [
        { name: "Python", category: "Language", level: "Advanced" },
        { name: "JavaScript / Node.js", category: "Web & Backend", level: "Intermediate" },
        { name: "C++", category: "Language", level: "Intermediate" },
        { name: "Arduino / IoT", category: "Hardware", level: "Intermediate" },
        { name: "Tailwind CSS", category: "Frontend", level: "Intermediate" },
        { name: "Git & Github", category: "Tools", level: "Intermediate" }
    ],
    softSkills: ["Public Speaking", "Problem Solving", "Critical Thinking"],
    projects: [
        {
            title: "Scope 1.0 - Prediksi SNBP",
            desc: "Aplikasi web untuk memprediksi peluang lolos SNBP berdasarkan nilai rapor dan data historis.",
            tech: ["HTML5", "Node.js", "CSS"],
            link: "https://github.com/bintanglincah/scope-snbp"
        },
        {
            title: "Analisis Transkrip Mahasiswa",
            desc: "Tugas Besar Dasar Pemrograman untuk mengelola dan menganalisis data transkrip nilai mahasiswa secara otomatis.",
            tech: ["Python", "Algoritma Dasar"],
            link: "#" // Masukkan link jika ada
        }
    ],
    contact: {
        email: "bintanglincahrok@gmail.com",
        github: "bintanglincah",
        linkedin: "https://www.linkedin.com/in/bintang-anggaraksa-lincah-nugraha-6b9693385/",
        instagram: "bntang.ln"
    }
};

// Route Utama
app.get('/', (req, res) => {
    res.render('index', { data: portfolioData });
});

app.listen(port, () => {
    console.log(`Portfolio Bintang berjalan di http://localhost:${port}`);
});