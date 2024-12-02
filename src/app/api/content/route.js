export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get("lang") || "english";
  
    // const content = {
    //   english: {
    //     heading: "7 Best Growth Hacking Tips for Startups & SaaS",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //   },
    //   hindi: {
    //     heading: "स्टार्टअप और सास के लिए 7 बेहतरीन ग्रोथ हैकिंग टिप्स",
    //     description: "लोरम इप्सम डोलर सिट एमे, कोंसेक्टर अडिपिसिंग एलीट।",
    //   },
    // };
    const content = {
        
          english: {
            details: [
              {
                heading: "Best Lemon Varieties for Indian Weather",
                description: `
                - Kagzi Nimbu (Key Lime): Most popular, thrives in Indian climates, and is widely used in Indian kitchens.
                - Eureka Lemon: Evergreen variety, ideal for year-round fruit production, thrives in subtropical regions.
                - Meyer Lemon: A hybrid of lemon and mandarin orange, known for its sweet taste, suitable for smaller gardens or containers.
                - Lisbon Lemon: Hardy, drought-tolerant, and highly productive variety.
                `
              },
              {
                heading: "Sunlight Requirements",
                description: `
                - Lemon plants require 6–8 hours of direct sunlight daily.
                - If grown in pots, place them in a location with abundant sunlight (like a terrace or balcony).
                - In extremely hot regions, provide partial shade during peak summer afternoons.
                `
              },
              {
                heading: "Watering Frequency",
                description: `
                - Young Plants: Water regularly to keep the soil moist but not waterlogged.
                - Mature Plants:
                  - Summer: Water every 2–3 days.
                  - Winter: Reduce watering to once a week, depending on soil dryness.
                - Avoid overwatering as it can lead to root rot. Allow the topsoil to dry slightly between waterings.
                `
              },
              {
                heading: "Soil Requirements",
                description: `
                - Lemon plants prefer well-draining soil, slightly acidic (pH 5.5–6.5).
                - Use a mix of garden soil, sand, and organic compost for better drainage.
                - Avoid heavy clay soil, as it can lead to waterlogging and root rot.
                `
              },
              {
                heading: "Fertilizer Recommendations",
                description: `
                - Use balanced NPK fertilizer (5:5:5 or 6:6:6) during the growing season.
                - Add organic compost, manure, or vermicompost every 3 months.
                - Micronutrients like zinc, magnesium, and iron are essential for healthy growth.
                `
              },
              {
                heading: "Pruning and Maintenance",
                description: `
                - Prune after the fruiting season to remove dead, diseased, or weak branches.
                - Remove suckers (unwanted shoots) growing from the base of the plant.
                - Ensure good airflow by thinning out crowded branches.
                `
              },
              {
                heading: "Dormancy Period",
                description: `
                - Lemon plants enter a semi-dormant phase during winter.
                - Reduce watering and stop fertilizing during this time.
                - Protect from frost by covering with mulch or bringing potted plants indoors.
                `
              },
              {
                heading: "Pests and Diseases",
                description: `
                - Common Pests: Aphids, whiteflies, and spider mites. Use neem oil or insecticidal soap for control.
                - Diseases: Root rot (caused by overwatering), citrus canker, and leaf spots. Ensure proper drainage and use fungicides as needed.
                `
              },
              {
                heading: "Temperature and Climate Needs",
                description: `
                - Optimal temperature: 20–35°C.
                - Avoid frost and extreme cold, as lemon plants are sensitive to freezing temperatures.
                - Ensure protection from heavy winds and hail.
                `
              },
              {
                heading: "Tips for Growing in Pots",
                description: `
                - Use a pot with proper drainage holes and at least 18-24 inches in diameter.
                - Choose dwarf or compact lemon varieties like Meyer Lemon.
                - Use lightweight potting soil mixed with compost for better drainage.
                - Repot every 2-3 years to refresh the soil and promote growth.
                `
              }
            ]
          },
          hindi: {
            details: [
              {
                heading: "भारतीय मौसम के लिए सर्वश्रेष्ठ नींबू की किस्में",
                description: `
                - कागजी नींबू: सबसे लोकप्रिय, भारतीय जलवायु में पनपता है और भारतीय रसोई में व्यापक रूप से उपयोग होता है।
                - यूरिका नींबू: हराभरा पौधा, साल भर फल देने में सक्षम, उपोष्णकटिबंधीय क्षेत्रों के लिए उपयुक्त।
                - मेयर नींबू: नींबू और संतरे का संकर, मीठा स्वाद, छोटे बगीचों या गमलों के लिए उपयुक्त।
                - लिस्बन नींबू: मजबूत, सूखा सहनशील, और अधिक उत्पादक।
                `
              },
              {
                heading: "धूप की आवश्यकताएं",
                description: `
                - नींबू के पौधों को रोजाना 6–8 घंटे की सीधी धूप चाहिए।
                - गमले में उगाए गए पौधों को ऐसी जगह रखें जहां अच्छी धूप हो (जैसे छत या बालकनी)।
                - बहुत गर्म क्षेत्रों में, गर्मियों की दोपहर के समय हल्की छाया प्रदान करें।
                `
              },
              {
                heading: "पानी देने की आवृत्ति",
                description: `
                - नवोदित पौधे: मिट्टी को नम रखने के लिए नियमित रूप से पानी दें, लेकिन जलभराव से बचें।
                - विकसित पौधे:
                  - गर्मियों में: हर 2–3 दिन में पानी दें।
                  - सर्दियों में: मिट्टी की सूखावट के अनुसार सप्ताह में एक बार पानी दें।
                - अधिक पानी देने से जड़ों को नुकसान हो सकता है। मिट्टी की ऊपरी परत को थोड़ा सूखने दें।
                `
              },
              {
                heading: "मिट्टी की आवश्यकताएं",
                description: `
                - नींबू के पौधों के लिए अच्छी जल निकासी वाली, हल्की अम्लीय मिट्टी (pH 5.5–6.5) बेहतर होती है।
                - बेहतर जल निकासी के लिए बगीचे की मिट्टी, रेत, और जैविक खाद का मिश्रण उपयोग करें।
                - भारी मिट्टी (क्ले सॉयल) से बचें, क्योंकि इससे जड़ों में सड़न हो सकती है।
                `
              },
              {
                heading: "खाद की सिफारिशें",
                description: `
                - बढ़ते मौसम में संतुलित एनपीके खाद (5:5:5 या 6:6:6) का उपयोग करें।
                - हर 3 महीने में जैविक खाद, गोबर खाद, या वर्मीकम्पोस्ट डालें।
                - जिंक, मैग्नीशियम, और आयरन जैसे सूक्ष्म पोषक तत्व पौधों के लिए आवश्यक हैं।
                `
              },
              {
                heading: "छंटाई और रखरखाव",
                description: `
                - फसल के बाद मृत, रोगग्रस्त, या कमजोर शाखाओं को काटें।
                - पौधे के आधार से निकलने वाली अनावश्यक शाखाओं (सकर) को हटा दें।
                - अच्छे वायुप्रवाह के लिए घनी शाखाओं को पतला करें।
                `
              },
              {
                heading: "निष्क्रियता अवधि",
                description: `
                - नींबू के पौधे सर्दियों में अर्ध-निष्क्रिय हो जाते हैं।
                - इस समय पानी कम करें और खाद डालना बंद कर दें।
                - ठंड से बचाने के लिए गमले वाले पौधों को अंदर ले जाएं या गीली घास से ढक दें।
                `
              },
              {
                heading: "कीट और रोग",
                description: `
                - सामान्य कीट: एफिड्स, सफेद मक्खी, और मकड़ी के कीड़े। नियंत्रण के लिए नीम तेल या कीटनाशक साबुन का उपयोग करें।
                - रोग: जड़ सड़न (अधिक पानी से), सिट्रस कैंकर, और पत्तों के धब्बे। उचित जल निकासी सुनिश्चित करें और जरूरत पड़ने पर फफूंदनाशक का उपयोग करें।
                `
              },
              {
                heading: "तापमान और जलवायु की आवश्यकताएं",
                description: `
                - आदर्श तापमान: 20–35°C।
                - ठंढ और अत्यधिक ठंड से बचाएं, क्योंकि नींबू के पौधे ठंडे तापमान के प्रति संवेदनशील होते हैं।
                - भारी हवाओं और ओलों से पौधों को बचाएं।
                `
              },
              {
                heading: "गमलों में उगाने के लिए सुझाव",
                description: `
                - अच्छे जल निकासी छेद वाले गमले का उपयोग करें, जिसका व्यास कम से कम 18-24 इंच हो।
                - ड्वार्फ या कॉम्पैक्ट किस्में, जैसे मेयर नींबू, चुनें।
                - हल्की पॉटिंग मिट्टी को जैविक खाद के साथ मिलाएं ताकि जल निकासी बेहतर हो।
                - मिट्टी को ताजा रखने और वृद्धि को प्रोत्साहित करने के लिए हर 2-3 साल में पुन: रोपाई करें।
                `
              }
            ]
          },
        
        };
      
  
    return new Response(JSON.stringify(content[lang]), {
      headers: { "Content-Type": "application/json" },
    });
  }
  