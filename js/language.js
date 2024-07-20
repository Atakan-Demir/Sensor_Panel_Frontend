
export const languages = {
    en: {
        menu_home: "Home",
        menu_config: "Configuration",
        menu_documentation: "Documentation",
        menu_title: "Sensor",
        header_title: "Industrial Ultrasonic Sensor",
        bar_card_title: "Information",
        black_segment_info: "Lower Limit: The bottom of this area is technically unsupported and therefore out of use.",
        green_segment_info: "Detection Area: The sensor will detect at selected intervals and output accordingly.",
        yellow_segment_info: "Positive Offset: Adds a percentage of the offset value you set to the maximum range and extends the maximum distance in the positive direction.",
        red_segment_info: "Negative Offset: Subtracts the percentage of the offset value you set to the maximum range and decreases the maximum distance in the negative direction.",
        max_dis_label:"Maximum Distance (mm)"
    },
    de: {
        menu_home: "Startseite",
        menu_config: "Konfiguration",
        menu_documentation: "Dokumentation",
        menu_title: "Sensor",
        header_title: "Industrieller Ultraschallsensor",
        bar_card_title: "Information",
        black_segment_info: "Unteres Limit: Der Boden dieses Bereichs ist technisch nicht unterstützt und daher außer Betrieb.",
        green_segment_info: "Erfassungsbereich: Der Sensor erkennt in ausgewählten Intervallen und gibt entsprechend aus.",
        yellow_segment_info: "Positiver Offset: Fügt einen Prozentsatz des von Ihnen festgelegten Offset-Werts zur maximalen Reichweite hinzu und verlängert die maximale Entfernung in positive Richtung.",
        red_segment_info: "Negativer Offset: Verringert den Prozentsatz des von Ihnen festgelegten Offset-Werts von der maximalen Reichweite und verringert die maximale Entfernung in negative Richtung.",

    },
    tr: {
        menu_home: "Ana Sayfa",
        menu_config: "Yapılandırma",
        menu_documentation: "Dokümantasyon",
        menu_title: "Sensör",
        header_title: "Endüstriyel Ultrasonik Sensör",
        bar_card_title: "Bilgi",
        black_segment_info: "Alt Limit: Bu alanın alt kısmı teknik olarak desteklenmemektedir ve bu nedenle kullanılmaz.",
        green_segment_info: "Algılama Alanı: Sensör, seçilen aralıklarda algılar ve buna göre çıkış verir.",
        yellow_segment_info: "Pozitif Ofset: Belirlediğiniz ofset değerinin bir yüzdesini maksimum menzile ekler ve maksimum mesafeyi pozitif yönde uzatır.",
        red_segment_info: "Negatif Ofset: Belirlediğiniz ofset değerinin yüzdesini maksimum menzilden çıkarır ve maksimum mesafeyi negatif yönde azaltır.",
    }
    

};

// language change function
export function updateLanguage(lang) {
    const language = languages[lang];
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (language[key]) {
            element.textContent = language[key];
        } else {
            //console.warn(`Language key '${key}' not found for language '${lang}'`);
        }
    });
}
