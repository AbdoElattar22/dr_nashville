/* =========================================================
   DR. NASHVILLE — script.js
   Vanilla JS: menu render, filters, cart (localStorage),
   scroll reveal, navbar state, lightbox, embers, back-to-top
   ========================================================= */

/* ---------- MENU DATA ---------- */
/* Extracted from the provided menu images. Ingredient notes are
   short, best-effort descriptions based on item names — the printed
   ingredient text was too small to OCR with full confidence, so
   double-check these against the real menu before going live. */
const MENU = [
  // SMASH
  {
    id: "sm1",
    cat: "smash",
    nameEn: "Classic Smash",
    nameAr: "كلاسيك سماش",
    price: 120,
    desc: "Smash beef patty, cheddar, lettuce, fries, caramelized onions,Texas,BBQ.",
    descAr:
      "قطعة سماش لحم، جبنة تشيدر، خس، بطاطس مقلية، بصل مكرمل، صوص تكساس، باربكيو.",
  },
  {
    id: "sm2",
    cat: "smash",
    nameEn: "Double Smash",
    nameAr: "دبل سماش",
    price: 160,
    desc: "Two smash patties, double cheddar, fries, caramelized onions,Texas,BBQ.",
    descAr:
      "قطعتين سماش لحم، دبل تشيدر، بطاطس مقلية، بصل مكرمل، صوص تكساس، باربكيو.",
  },
  {
    id: "sm3",
    cat: "smash",
    nameEn: "Triple Smash",
    nameAr: "تريبل سماش",
    price: 210,
    desc: "Three smash patties, melted cheddar,  fries, caramelized onions,Texas,BBQ.",
    descAr:
      "تلات قطع سماش لحم، تشيدر دايب، بطاطس مقلية، بصل مكرمل، صوص تكساس، باربكيو.",
  },
  {
    id: "sm4",
    cat: "smash",
    nameEn: "Smash Mushroom",
    nameAr: "سماش مشروم",
    price: 190,
    desc: "Smash patties, sautéed mushroom, cheddar,  fries, caramelized onions,Bosten,BBQ.",
    descAr:
      "قطع سماش لحم، مشروم سوتيه، جبنة تشيدر، بطاطس مقلية، بصل مكرمل، صوص بوسطن، باربكيو.",
  },
  {
    id: "sm5",
    cat: "smash",
    nameEn: "Smash Bacon",
    nameAr: "سماش بيكون",
    price: 140,
    desc: "Smash patty, crispy beef bacon, cheddar,  fries, caramelized onions,Texas,BBQ.",
    descAr:
      "قطعة سماش لحم، بيكون لحم مقرمش، جبنة تشيدر، بطاطس مقلية، بصل مكرمل، صوص تكساس، باربكيو.",
  },
  {
    id: "sm6",
    cat: "smash",
    nameEn: "Dr Smash",
    nameAr: "دكتور سماش",
    price: 200,
    desc: "Smash patty,rispy chicken fillet, —  fries, caramelized onions,Texas,BBQ,cheddar.",
    descAr:
      "قطعة سماش لحم مع فيليه دجاج مقرمش، بطاطس مقلية، بصل مكرمل، صوص تكساس، باربكيو، جبنة تشيدر.",
  },
  {
    id: "sm7",
    cat: "smash",
    nameEn: "Fire Burger",
    nameAr: "فاير برجر",
    price: 130,
    desc: "Smash patty, spicy sauce, pickled jalapeño, cheddar, fries, caramelized onions,Texas,BBQ.",
    descAr:
      "قطعة سماش لحم، صوص حار، هالبينو مخلل، جبنة تشيدر، بطاطس مقلية، بصل مكرمل، صوص تكساس، باربكيو.",
  },

  // CHICKEN SANDWICHES
  {
    id: "ch1",
    cat: "chicken",
    nameEn: "Texas Empire",
    nameAr: "تيكساس امباير",
    price: 160,
    priceSingle: 105,
    desc: "Crispy chicken fillet, Texas sauce, fries,1000island.",
    descAr: "فيليه دجاج مقرمش، صوص تكساس، بطاطس مقلية، صوص ١٠٠٠ آيلاند.",
  },
  {
    id: "ch2",
    cat: "chicken",
    nameEn: "Florida",
    nameAr: "فلوريدا",
    price: 165,
    priceSingle: 105,
    desc: "Crispy chicken grilled, fries, Texas,katcheb.",
    descAr: "فيليه دجاج مشوي مقرمش، بطاطس مقلية، صوص تكساس، كاتشب.",
  },
  {
    id: "ch3",
    cat: "chicken",
    nameEn: "Golden Mountain",
    nameAr: "جولدن ماونتين",
    price: 175,
    priceSingle: 115,
    desc: "Crispy chicken fillet, cheddar,Texas,fries .",
    descAr: "فيليه دجاج مقرمش، جبنة تشيدر، صوص تكساس، بطاطس مقلية.",
  },
  {
    id: "ch4",
    cat: "chicken",
    nameEn: "Smoky Beast",
    nameAr: "سموكي بيست",
    price: 180,
    priceSingle: 120,
    desc: "Crispy chicken fillet, smoky BBQ sauce, Texas,Bacon,fries.",
    descAr:
      "فيليه دجاج مقرمش، صوص باربكيو مدخن، صوص تكساس، بيكون، بطاطس مقلية.",
  },
  {
    id: "ch5",
    cat: "chicken",
    nameEn: "Rock Ranch",
    nameAr: "روك رانش",
    price: 185,
    priceSingle: 125,
    desc: "Crispy chicken fillet, ranch sauce, fries, mayo,mozzarella sticks.",
    descAr: "فيليه دجاج مقرمش، صوص رانش، بطاطس مقلية، مايونيز، أصابع موتزريلا.",
  },
  {
    id: "ch6",
    cat: "chicken",
    nameEn: "Flash Fire",
    nameAr: "فلاش فاير",
    price: 175,
    priceSingle: 115,
    desc: "Crispy chicken fillet, Texas,fires,pickled jalapeño,tiger sauce.",
    descAr:
      "فيليه دجاج مقرمش، صوص تكساس، بطاطس مقلية، هالبينو مخلل، صوص تايجر.",
  },
  {
    id: "ch7",
    cat: "chicken",
    nameEn: "Bee Bomb",
    nameAr: "بي بومب",
    price: 175,
    priceSingle: 115,
    desc: "Crispy chicken fillet, honey mustard, sweetchilli,fries,smoked turkey.",
    descAr:
      "فيليه دجاج مقرمش، صوص عسل وخردل، سويت شيلي، بطاطس مقلية، ديك رومي مدخن.",
  },
  {
    id: "ch8",
    cat: "chicken",
    nameEn: "Creamy Onion",
    nameAr: "كريمي اونيون",
    price: 195,
    priceSingle: 130,
    desc: "Crispy chicken fillet, creamy onion sauce, fries,onion rings .",
    descAr: "فيليه دجاج مقرمش، صوص البصل الكريمي، بطاطس مقلية، حلقات بصل.",
  },
  {
    id: "ch9",
    cat: "chicken",
    nameEn: "Solo Nash",
    nameAr: "سولو ناش",
    price: 200,
    priceSingle: 130,
    desc: " chicken fillet, coleslaw, fries, 1000island.",
    descAr: "فيليه دجاج، كولسلو، بطاطس مقلية، صوص ١٠٠٠ آيلاند.",
  },
  {
    id: "ch10",
    cat: "chicken",
    nameEn: "Big Flair Jalapeño",
    nameAr: "بيج فلير هالبينو",
    price: 160,
    desc: "Three fillets, pickled jalapeño, mayo,BBQ,Texas,cheddar,.",
    descAr:
      "تلات فيليه دجاج، هالبينو مخلل، مايونيز، باربكيو، صوص تكساس، جبنة تشيدر.",
  },
  {
    id: "ch11",
    cat: "chicken",
    nameEn: "Big Flair Buffalo",
    nameAr: "بيج فلير بافلو",
    price: 165,
    desc: "Three fillets, buffalo sauce, mayo,BBQ,cheddar.",
    descAr: "تلات فيليه دجاج، صوص بافلو، مايونيز، باربكيو، جبنة تشيدر.",
  },
  {
    id: "ch12",
    cat: "chicken",
    nameEn: "Flair Nash",
    nameAr: "فلير ناش",
    price: 170,
    desc: "Three fillets,coleslaw, 1000island.",
    descAr: "تلات فيليه دجاج، كولسلو، صوص ١٠٠٠ آيلاند.",
  },

  // ROLLS
  {
    id: "rl1",
    cat: "rolls",
    nameEn: "Original Roll",
    nameAr: "اوريجينال رول",
    price: 100,
    desc: "Roll bread, lettuce, chicken strips, fries, cheddar,Texas.",
    descAr: "خبز رول، خس، سترپس دجاج، بطاطس مقلية، جبنة تشيدر، صوص تكساس.",
  },
  {
    id: "rl2",
    cat: "rolls",
    nameEn: "Fly Rap",
    nameAr: "فلاي راب",
    price: 115,
    desc: "Wrapped roll, chicken, lettuce, fries,  smoked turkey,cheddar,Bistan,BBQ.",
    descAr:
      "رول ملفوف، دجاج، خس، بطاطس مقلية، ديك رومي مدخن، جبنة تشيدر، صوص بوسطن، باربكيو.",
  },
  {
    id: "rl3",
    cat: "rolls",
    nameEn: "Tiger Shot",
    nameAr: "تايجر شوت",
    price: 115,
    desc: "Roll bread, chicken strips, tiger sauce,pickled jalapeño,Texas .",
    descAr: "خبز رول، سترپس دجاج، صوص تايجر، هالبينو مخلل، صوص تكساس.",
  },
  {
    id: "rl4",
    cat: "rolls",
    nameEn: "Giant Roll",
    nameAr: "جاينت رول",
    price: 145,
    desc: "Large roll, extra chicken, mozzarella sticks, smoked turkey,.",
    descAr: "رول كبير، دجاج إضافي، أصابع موتزريلا، ديك رومي مدخن.",
  },
  {
    id: "rl5",
    cat: "rolls",
    nameEn: "Boston Island",
    nameAr: "بوسطن آيسلاند",
    price: 110,
    desc: "Roll bread, chicken strips, Boston sauce,cheddar,Bosten,1000island .",
    descAr: "خبز رول، سترپس دجاج، صوص بوسطن، جبنة تشيدر، صوص ١٠٠٠ آيلاند.",
  },
  {
    id: "rl6",
    cat: "rolls",
    nameEn: "Mighty Potato",
    nameAr: "مايتي بوتيتو",
    price: 50,
    desc: "Loaded potato roll with ketchup,Garlicky.",
    descAr: "رول بطاطس محملة بالكاتشب وصوص الثوم.",
  },

  // TRAYS
  {
    id: "tr1",
    cat: "trays",
    nameEn: "Dala3 Tray",
    nameAr: "صنية الدلع",
    price: 400,
    desc: "Sharing tray — 4 broasted ,4 strips  duck rizo, fries cheddar, 2 coleslaw, 2 garlicky,4 bread .",
    descAr:
      " صينية المشاركة — ٤ قطع بروست، ٤ قطع ستربس، أرز بط، بطاطس شيدر، ٢ كول سلو.",
  },
  {
    id: "tr2",
    cat: "trays",
    nameEn: "Duetto Tray",
    nameAr: "صنية الدويتو",
    price: 440,
    desc: "Sharing tray for two — 2 broasted , 2 strips, 1 golden mountain , 1 texas ambier , 1 garlicky , 1 coleslaw , 2bread .",
    descAr:
      " صينية المشاركة لشخصين — ٢ قطعة بروست، ٢ قطعة ستربس، ١ جولدن ماونتن، ١ تكساس أمبر، ١ جارليكي، ١ كول سلو، ٢ رغيف خبز.",
  },
  {
    id: "tr3",
    cat: "trays",
    nameEn: "Family Tray",
    nameAr: "صنية العيلة",
    price: 520,
    desc: "Family-size tray — 9 broasted , duck rizo, fries cheddar , jar garlicky , jar coleslaw , 5 bread , 1Lpepsi.",
    descAr:
      " صينية العائلة — ٩ قطع بروست، أرز بط، بطاطس شيدر، برطمان جارليكي، برطمان كول سلو، ٥ أرغفة خبز، وبيبسي ١ لتر.",
  },
  {
    id: "tr4",
    cat: "trays",
    nameEn: "Mix Tray",
    nameAr: "صنية الميكس",
    price: 540,
    desc: "Mixed tray — 6 strips, 6 broasted, duck rizo,fries cheddar, 3 coleslaw, 3 garlicky , 4 bread.",
    descAr:
      "الصينية المشكلة — ٦ قطع ستربس، ٦ قطع بروست، أرز بط، بطاطس شيدر، ٣ كول سلو، ٣ جارليكي، ٤ أرغفة خبز.ة.",
  },
  {
    id: "tr5",
    cat: "trays",
    nameEn: "Monster Tray",
    nameAr: "صنية الوحش",
    price: 820,
    desc: "Our largest tray — 9 strips, 9 broasted, duck rizo,fries cheddar, 4 coleslaw, 4 garlicky , 8 bread , 1Lpepsi .",
    descAr:
      " أكبر صينية لدينا — ٩ قطع ستربس، ٩ قطع بروست، أرز بط، بطاطس شيدر، ٤ كول سلو، ٤ جارليكي، ٨ أرغفة خبز، وبيبسي ١ لتر.",
  },

  // STRIPS MEALS
  {
    id: "st1",
    cat: "strips",
    nameEn: "3 Pcs Strips Meal",
    nameAr: "٣ قطع استربس",
    price: 155,
    desc: "3 crispy chicken strips with fries and Rizzo and garlicky.",
    descAr: "٣ قطع استربس دجاج مقرمشة مع بطاطس مقلية وريزو وصوص ثوم.",
  },
  {
    id: "st2",
    cat: "strips",
    nameEn: "6 Pcs Strips Meal",
    nameAr: "٦ قطع استربس",
    price: 260,
    desc: "6 crispy chicken strips with fries and Rizzo and garlicky.",
    descAr: "٦ قطع استربس دجاج مقرمشة مع بطاطس مقلية وريزو وصوص ثوم.",
  },
  {
    id: "st3",
    cat: "strips",
    nameEn: "9 Pcs Strips Meal",
    nameAr: "٩ قطع استربس",
    price: 395,
    desc: "9 crispy chicken strips with fries and Rizzo and garlicky.",
    descAr: "٩ قطع استربس دجاج مقرمشة مع بطاطس مقلية وريزو وصوص ثوم.",
  },
  {
    id: "st4",
    cat: "strips",
    nameEn: "12 Pcs Strips Meal",
    nameAr: "١٢ قطعة استربس",
    price: 495,
    desc: "12 crispy chicken strips with fries and Rizzo and garlicky.",
    descAr: "١٢ قطعة استربس دجاج مقرمشة مع بطاطس مقلية وريزو وصوص ثوم.",
  },

  // DUCK MEALS
  {
    id: "dk1",
    cat: "duck",
    nameEn: "Nash Box",
    nameAr: "ناش بوكس",
    price: 125,
    desc: "2 pieces — fries, Rizzo, coleslaw,garlicky.",
    descAr: "قطعتين — بطاطس مقلية، ريزو، كولسلو، صوص ثوم.",
  },
  {
    id: "dk2",
    cat: "duck",
    nameEn: "Quarter Box",
    nameAr: "كوارتر بوكس",
    price: 210,
    desc: "4 pieces — fries,2 Rizzo, coleslaw,garlicky.",
    descAr: "٤ قطع — بطاطس مقلية، ريزوهين، كولسلو، صوص ثوم.",
  },
  {
    id: "dk3",
    cat: "duck",
    nameEn: "Big Box",
    nameAr: "بيج بوكس",
    price: 300,
    desc: "6 pieces — fries, 3 Rizzo, 3 coleslaw,3 garlicky.",
    descAr: "٦ قطع — بطاطس مقلية، ٣ ريزو، ٣ كولسلو،  3 صوص ثوم.",
  },
  {
    id: "dk4",
    cat: "duck",
    nameEn: "Combo Box",
    nameAr: "كومبو بوكس",
    price: 430,
    desc: "9 pieces  —fries, 3 Rizzo,3 coleslaw,3 garlicky,1Lpepsi.",
    descAr: "٩ قطع — بطاطس مقلية، ٣ ريزو، ٣ كولسلو، ٣ صوص ثوم، عصير بيبسي لتر.",
  },
  {
    id: "dk5",
    cat: "duck",
    nameEn: "Duck Box",
    nameAr: "دوك بوكس",
    price: 570,
    desc: "12 pieces  — fries, 4 Rizzo, 4 coleslaw,4 garlicky,1Lpepsi.",
    descAr:
      "١٣ قطعة — بطاطس مقلية، ٤ ريزو، ٤ كولسلو، ٤ صوص ثوم، عصير بيبسي لتر.",
  },
  {
    id: "dk6",
    cat: "duck",
    nameEn: "King Box",
    nameAr: "كينج بوكس",
    price: 720,
    desc: "15 pieces 5 fries, 5 Rizzo, 5 coleslaw, 5 garlicky,1Lpepsi.",
    descAr:
      "١٥ قطعة — ٥ بطاطس مقلية، ٥ ريزو، ٥ كولسلو، ٥ صوص ثوم، عصير بيبسي لتر.",
  },
  {
    id: "dk7",
    cat: "duck",
    nameEn: "Family Box",
    nameAr: "فاميلي بوكس",
    price: 800,
    desc: "18 pieces, fries, 6 Rizzo, 6 coleslaw,6 garlicky,2Lpepsi.",
    descAr:
      "١٨ قطعة، بطاطس مقلية، ٦ ريزو، ٦ كولسلو، ٦ صوص ثوم، عصير بيبسي لترين.",
  },

  // SIDE ITEMS
  {
    id: "sd1",
    cat: "sides",
    nameEn: "Kids Meal",
    nameAr: "وجبة الأطفال",
    price: 75,
    desc: "Broasted piece, fries, bread, rice, juice.",
    descAr: "قطعة بروستد، بطاطس مقلية، خبز، أرز، عصير.",
  },
  {
    id: "sd2",
    cat: "sides",
    nameEn: "Pop Nash",
    nameAr: "بوب ناش",
    price: 80,
    desc: "Popcorn chicken pieces, sweet chili sauce.",
    descAr: "قطع دجاج بوب كورن مع صوص السويت شيلي.",
  },
  {
    id: "sd3",
    cat: "sides",
    nameEn: "Duck Fries",
    nameAr: "دوك فرايز",
    price: 90,
    desc: "Loaded fries — chicken strips, cheddar,Texas, jalapeño.",
    descAr: "بطاطس محملة — سترپس دجاج، جبنة تشيدر، صوص تكساس، هالبينو.",
  },
  {
    id: "sd4",
    cat: "sides",
    nameEn: "Duck Rizo (Plain)",
    nameAr: "دوك ريزو عادي",
    price: 90,
    desc: "Rice with chicken strips, sweet chili, Texas.",
    descAr: "أرز مع سترپس دجاج، صوص سويت شيلي، تكساس.",
  },
  {
    id: "sd5",
    cat: "sides",
    nameEn: "Duck Rizo (Spicy)",
    nameAr: "دوك ريزو سبايسي",
    price: 90,
    desc: "Rice with chicken strips, Tiger sauce, jalapeño, Texas.",
    descAr: "أرز مع سترپس دجاج، صوص تايجر، هالبينو، تكساس.",
  },
  {
    id: "sd6",
    cat: "sides",
    nameEn: "Duck Fajita",
    nameAr: "دوك فاهيتا",
    price: 95,
    desc: "Rice, Fajita, BBQ.",
    descAr: "أرز، فاهيتا، صوص باربكيو.",
  },
  {
    id: "sd7",
    cat: "sides",
    nameEn: "Duck Mix",
    nameAr: "دوك ميكس",
    price: 180,
    desc: "1/3 duck Rizo, 1/3fahita, 1/3 chease fries,with de.basville sauces.",
    descAr:
      "ثلث دوك ريزو، ثلث فاهيتا، ثلث بطاطس بالجبنة، مع صوصات دكتور ناشفيل.",
  },
  {
    id: "sd8",
    cat: "sides",
    nameEn: "Gold Fries",
    nameAr: "جولد فرايز",
    price: 65,
    desc: "Fries topped with cheddar sauce.",
    descAr: "بطاطس مقلية مغطاة بصوص التشيدر.",
  },
  {
    id: "sd9",
    cat: "sides",
    nameEn: "Fries Supreme",
    nameAr: "فرايز سوبريم",
    price: 100,
    desc: "Fries, beef bacon, cheddar, strips pieces,,smoked turkey,testy.",
    descAr: "بطاطس مقلية، بيكون لحم، جبنة تشيدر، قطع استربس، ديك رومي مدخن.",
  },
  {
    id: "sd10",
    cat: "sides",
    nameEn: "Smash Fries",
    nameAr: "سماش فرايز",
    price: 95,
    desc: "Fries, smash beef pieces, cheddar sauce.",
    descAr: "بطاطس مقلية، قطع لحم سماش، صوص التشيدر.",
  },

  // EXTRAS
  {
    id: "ex1",
    cat: "extras",
    nameEn: "Rizo Rice",
    nameAr: "أرز ريزو",
    price: 20,
    desc: "Side portion of our seasoned rizo rice.",
    descAr: "طبق جانبي من أرز الريزو المتبل بتتبيلتنا الخاصة.",
  },
  {
    id: "ex2",
    cat: "extras",
    nameEn: "Fries",
    nameAr: "فرايز",
    price: 20,
    desc: "Classic crispy golden fries, lightly salted.",
    descAr: "بطاطس مقلية ذهبية مقرمشة، مملحة بالقدر المناسب.",
  },
  {
    id: "ex3",
    cat: "extras",
    nameEn: "Bread",
    nameAr: "خبز",
    price: 5,
    desc: "Fresh side bread.",
    descAr: "خبز جانبي طازة.",
  },
  {
    id: "ex4",
    cat: "extras",
    nameEn: "Dipping Jar",
    nameAr: "دبينج جار",
    price: 60,
    desc: "A jar of our house dipping sauce.",
    descAr: "برطمان من صوص التغميس الخاص بينا.",
  },
  {
    id: "ex5",
    cat: "extras",
    nameEn: "Coleslaw",
    nameAr: "كولسلو",
    price: 20,
    desc: "Fresh, creamy house-made coleslaw.",
    descAr: "كولسلو طازة وكريمي، مصنوع في المطعم.",
  },
  {
    id: "ex6",
    cat: "extras",
    nameEn: "Mozzarella Sticks",
    nameAr: "اصابع موتزريلا",
    price: 40,
    desc: "Crispy fried mozzarella sticks, golden and gooey.",
    descAr: "أصابع موتزريلا مقرمشة من برة، ذايبة من جوة.",
  },
  {
    id: "ex7",
    cat: "extras",
    nameEn: "Onion Rings",
    nameAr: "حلقات بصل",
    price: 40,
    desc: "Crunchy battered onion rings.",
    descAr: "حلقات بصل مقرمشة مغطاة بالبانيه.",
  },
  {
    id: "ex8",
    cat: "extras",
    nameEn: "Garlic Sauce",
    nameAr: "تومية",
    price: 10,
    desc: "Side portion of our house garlic sauce.",
    descAr: "طبق جانبي من صوص الثوم الخاص بينا.",
  },
  {
    id: "ex9",
    cat: "extras",
    nameEn: "Strips Piece",
    nameAr: "قطعة استربس",
    price: 45,
    desc: "One extra crispy chicken strip.",
    descAr: "قطعة إضافية من الاستربس المقرمش.",
  },
  {
    id: "ex10",
    cat: "extras",
    nameEn: "Broasted Piece",
    nameAr: "قطعة بروست",
    price: 50,
    desc: "One extra broasted chicken piece.",
    descAr: "قطعة إضافية من الدجاج البروستد.",
  },

  // DRINKS
  {
    id: "dr1",
    cat: "drinks",
    nameEn: "Water",
    nameAr: "مياه",
    price: 10,
    desc: "Chilled bottled water.",
    descAr: "مياه معدنية مثلجة.",
  },
  {
    id: "dr2",
    cat: "drinks",
    nameEn: "Canned Soda",
    nameAr: "كانز",
    price: 20,
    desc: "Your choice of chilled canned soft drink.",
    descAr: "اختيارك من المشروبات الغازية المثلجة.",
  },
  {
    id: "dr3",
    cat: "drinks",
    nameEn: "Pepsi (1L)",
    nameAr: "لتر بيبسي",
    price: 40,
    desc: "1 Liter bottle of Pepsi, chilled and ready to share.",
    descAr: "زجاجة بيبسي لتر واحد، مثلجة وجاهزة للمشاركة.",
  },

  // SAUCES
  {
    id: "sa1",
    cat: "sauces",
    nameEn: "Sauce of Choice",
    nameAr: "اختيارات الصوص",
    price: 20,
    desc: "Pick your dip.",
    descAr: "اختار الصوص اللي يعجبك.",
    sauceOptions: [
      "Cheddar",
      "Texas",
      "BBQ",
      "Boston",
      "Ranch",
      "Sweet Chili",
      "Honey Mustard",
      "Tiger",
    ],
    sauceOptionsAr: [
      "تشيدر",
      "تكساس",
      "باربكيو",
      "بوسطن",
      "رانش",
      "سويت شيلي",
      "عسل وخردل",
      "تايجر",
    ],
  },

  // LIMITED EDITION
  {
    id: "le1",
    cat: "limited",
    nameEn: "Crep",
    nameAr: "كريب ناز",
    price: 100,
    desc: "Toasted folded flatbread stuffed with chicken, melted cheese, fries and house sauces — pick your heat.",
    descAr:
      "خبز مطوي محمر محشو بالدجاج، جبنة ذايبة، بطاطس مقلية وصوصات البيت — اختار درجة الحرارة اللي تناسبك.",
    styleChoice: true,
  },
  {
    id: "le2",
    cat: "limited",
    nameEn: "Casadia",
    nameAr: "كاساديا",
    price: 130,
    desc: "Grilled loaded quesadilla-style wrap, sliced chicken, melted cheese, crispy fries and creamy sauce, finished with fresh herbs — pick your heat.",
    descAr:
      "راب كاساديا مشوي محمل، شرائح دجاج، جبنة ذايبة، بطاطس مقرمشة وصوص كريمي، متزين بالأعشاب الطازة — اختار درجة الحرارة اللي تناسبك.",
    styleChoice: true,
  },
];

/* Limited Edition — Crep Naz and Casadia, shown with the real photos you sent. */
/* =========================================================
   LANGUAGE / TRANSLATION SYSTEM
   ========================================================= */
const TRANSLATIONS = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navMenu: "Menu",
    navLimited: "Limited Edition",
    navLimitedOffers: "Limited Offers",
    navReviews: "Reviews",
    navContact: "Contact",

    heroEyebrow: "MALLAWI · MINYA",
    heroSlogan:
      "Nashville Hot Fried Chicken & Smash Burgers — fired up, stacked high, no shortcuts.",
    heroCtaMenu: "View Menu",
    heroCtaWhatsapp: "Order on WhatsApp",
    heroScroll: "Scroll",

    aboutEst: "EST.",
    aboutMallawi: "MALLAWI",
    aboutEyebrow: "Our Story",
    aboutTitle: "Chicken that earns its heat.",
    aboutText1:
      "Dr. Nashville started with one idea: Nashville-style hot fried chicken doesn't exist properly in Mallawi — so we built it ourselves. Every piece is brined, hand-breaded and fried to order, then finished the way it should be: loud, crisp, and dripping with flavor.",
    aboutText2:
      "Alongside our chicken, our Smash bar takes the same obsession into beef — thin-smashed, hard-seared patties stacked with melted cheese and house sauces. No freezers full of shortcuts. Just fire, fat, and technique.",
    whyCard1Title: "Cooked to Order",
    whyCard1Desc: "Never sitting under a heat lamp.",
    whyCard2Title: "Real Ingredients",
    whyCard2Desc: "Fresh brine, real spice blends.",
    whyCard3Title: "Fast Delivery",
    whyCard3Desc: "Straight from the fryer to your door.",

    menuEyebrow: "The Menu",
    menuTitle: "Everything's Fired Up",
    menuSub: "Every category, every box. Prices in Egyptian Pounds (L.E).",

    filterAll: "All",
    filterSmash: "Smash",
    filterChicken: "Chicken Sandwiches",
    filterRolls: "Rolls",
    filterDuck: "Duck Meals",
    filterTrays: "Trays",
    filterStrips: "Strips Meals",
    filterSides: "Side Items",
    filterExtras: "Extras",
    filterDrinks: "Drinks",
    filterSauces: "Sauces",
    filterLimited: "Limited Edition",

    limitedEyebrow: "Limited Edition",
    limitedTitle: "The Big Leagues",
    limitedSub: "Our largest, most loaded builds — while supplies last.",
    limitedTag: "While supplies last",
    limitedBadge: "Limited",
    limitedEmpty:
      "Nothing here yet — new limited drops are on the way. Check back soon.",

    limitedOffersEyebrow: "Limited Offers",
    limitedOffersTitle: "Deals Worth Firing Up For",
    limitedOffersSub: "Our current offers, all in one place.",
    limitedOffersEmpty:
      "No offers running right now — check back soon for our next deal.",

    reviewsEyebrow: "Customer Reviews",
    reviewsTitle: "Word on the Street",
    review1Text:
      '"The Dr Smash is unreal — crispy edges, melted cheese, perfect sauce ratio. Best smash burger in Minya, easily."',
    review1Name: "— Ahmed K.",
    review2Text:
      '"Ordered the Family Box for a get-together — everyone went quiet the second the box opened. Insanely crispy."',
    review2Name: "— Mariam S.",
    review3Text:
      '"Fast delivery, still hot, still crunchy. The Solo Nash lives up to the name — bring napkins."',
    review3Name: "— Youssef M.",

    contactEyebrow: "Get In Touch",
    contactTitle: "Come Get Some",
    contactAddressLabel: "Address",
    contactAddressValue:
      "Mallawi, Minya — Atef Barakat St, in front of El-Horreya School, above Al-Kahf Café",
    contactPhoneLabel: "Phone",
    contactWhatsappLabel: "WhatsApp",
    contactHoursLabel: "Opening Hours",
    contactHoursValue: "Daily — 1:00 PM to 2:00 AM",
    contactCallNow: "Call Now",
    contactWhatsappUs: "WhatsApp Us",
    contactMapText: "Google Maps — Mallawi, Minya",
    contactMapBtn: "Open in Google Maps",

    footerTagline: "Nashville Hot Fried Chicken & Smash Burgers.",
    footerQuickLinks: "Quick Links",
    footerAboutUs: "About Us",
    footerContactHeading: "Contact",
    footerMallawi: "Mallawi, Minya",
    footerRights: "All Rights Reserved.",
    footerDesignedBy: "Designed & Developed by",

    cartTitle: "Your Cart",
    cartPhoneLabel: "Phone Number",
    cartPhonePlaceholder: "01xxxxxxxxx",
    cartAddressLabel: "Delivery Address",
    cartAddressPlaceholder: "Street, area, landmark...",
    cartTotalLabel: "Total",
    cartEmptyBtn: "Empty Cart",
    cartCheckoutBtn: "Checkout on WhatsApp",
    cartEmptyMsg: "Your cart is empty.<br>Add something fired up!",

    labelStyle: "Style",
    labelSize: "Size",
    labelSauce: "Choose your sauce",
    doubleSinglePricing: "Double / Single pricing shown.",
    addToCart: "Add to Cart",
    added: "Added",
    addedToCart: "added to cart",

    waGreeting: "Hi Dr. Nashville, I'd like to order:",
    waTotal: "Total",
    waPhone: "Phone",
    waAddress: "Address",
  },
  ar: {
    navHome: "الرئيسية",
    navAbout: "من نحن",
    navMenu: "المنيو",
    navLimited: "الإصدار المحدود",
    navLimitedOffers: "عروض محدودة",
    navReviews: "آراء العملاء",
    navContact: "تواصل معنا",

    heroEyebrow: "ملوي · المنيا",
    heroSlogan:
      "دجاج ناشفيل الحار وسماش برجر — نار على نار، محملة لآخرها، من غير أي اختصارات.",
    heroCtaMenu: "شوف المنيو",
    heroCtaWhatsapp: "اطلب على واتساب",
    heroScroll: "انزل تحت",

    aboutEst: "تأسست",
    aboutMallawi: "ملوي",
    aboutEyebrow: "حكايتنا",
    aboutTitle: "دجاج ياخد حقه من النار.",
    aboutText1:
      "دكتور ناشفيل بدأت بفكرة واحدة: دجاج ناشفيل الحار الأصلي مكانش موجود بشكل صح في ملوي — فقررنا نعمله إحنا. كل قطعة بتتنقع، بتتبن بإيدينا، وبتتقلى أول ما تتطلب، وبتوصلك زي ما لازم تكون: مقرمشة وحارة ومحملة بالطعم.",
    aboutText2:
      "وجنب الدجاج، سماش بار بتاعنا بياخد نفس الهوس في اللحمة — قطع سماش رفيعة اتحمرت كويس ومحملة بالجبنة الذايبة وصوصات البيت. من غير فريزرات مليانة اختصارات. بس نار، ودهن، وخبرة.",
    whyCard1Title: "بتتحضر أول ما تتطلب",
    whyCard1Desc: "من غير ما تقعد تحت لمبة تسخين.",
    whyCard2Title: "مكونات حقيقية",
    whyCard2Desc: "تتبيلة طازة وخلطات بهارات حقيقية.",
    whyCard3Title: "توصيل سريع",
    whyCard3Desc: "من الفرن على طول لحد باب بيتك.",

    menuEyebrow: "المنيو",
    menuTitle: "كل حاجة نار",
    menuSub: "كل الأصناف، كل البوكسات. الأسعار بالجنيه المصري (ج.م).",

    filterAll: "الكل",
    filterSmash: "سماش",
    filterChicken: "ساندوتشات دجاج",
    filterRolls: "رولز",
    filterDuck: "دوك ميل",
    filterTrays: "الصواني",
    filterStrips: "استربس ميل",
    filterSides: "أطباق جانبية",
    filterExtras: "إضافات",
    filterDrinks: "مشروبات",
    filterSauces: "صوص",
    filterLimited: "الإصدار المحدود",

    limitedEyebrow: "الإصدار المحدود",
    limitedTitle: "أبطال القوايم الكبيرة",
    limitedSub: "أضخم وأكتر أصنافنا تحميلاً — لحد ما تخلص الكمية.",
    limitedTag: "لحد ما تخلص الكمية",
    limitedBadge: "محدود",
    limitedEmpty: "لسه مفيش حاجة هنا — أصناف محدودة جديدة جاية قريب. تابعنا.",

    limitedOffersEyebrow: "عروض محدودة",
    limitedOffersTitle: "عروض تستاهل تشعل النار",
    limitedOffersSub: "كل عروضنا الحالية في مكان واحد.",
    limitedOffersEmpty: "مفيش عروض شغالة دلوقتي — تابعنا قريب لعرضنا الجاي.",

    reviewsEyebrow: "آراء العملاء",
    reviewsTitle: "اللي الناس بتقوله",
    review1Text:
      "«الدكتور سماش حاجة تانية — أطراف مقرمشة، جبنة ذايبة، نسبة صوص مظبوطة. أحسن سماش برجر في المنيا من غير منافس.»",
    review1Name: "— أحمد ك.",
    review2Text:
      "«طلبت فاميلي بوكس لتجمع أصحاب — الكل سكت أول ما البوكس اتفتح. مقرمشة بجنون.»",
    review2Name: "— مريم س.",
    review3Text:
      "«توصيل سريع، والأكل وصل سخن ومقرمش زي ما هو. سولو ناش فعلاً بيثبت اسمه — جيب مناديل معاك.»",
    review3Name: "— يوسف م.",

    contactEyebrow: "تواصل معنا",
    contactTitle: "تعالى خد لك حاجة",
    contactAddressLabel: "العنوان",
    contactAddressValue:
      "ملوي، المنيا — شارع عاطف بركات، أمام مدرسة الحرية، فوق كافيه الكهف",
    contactPhoneLabel: "التليفون",
    contactWhatsappLabel: "واتساب",
    contactHoursLabel: "مواعيد العمل",
    contactHoursValue: "يومياً — من ١ الضهر لحد ٢ بعد نص الليل",
    contactCallNow: "اتصل بينا",
    contactWhatsappUs: "راسلنا واتساب",
    contactMapText: "خرايط جوجل — ملوي، المنيا",
    contactMapBtn: "افتح في خرايط جوجل",

    footerTagline: "دجاج ناشفيل الحار وسماش برجر.",
    footerQuickLinks: "روابط سريعة",
    footerAboutUs: "من نحن",
    footerContactHeading: "تواصل",
    footerMallawi: "ملوي، المنيا",
    footerRights: "جميع الحقوق محفوظة.",
    footerDesignedBy: "تصميم وتطوير",

    cartTitle: "سلة الطلبات",
    cartPhoneLabel: "رقم التليفون",
    cartPhonePlaceholder: "٠١xxxxxxxxx",
    cartAddressLabel: "عنوان التوصيل",
    cartAddressPlaceholder: "الشارع، المنطقة، أقرب علامة مميزة...",
    cartTotalLabel: "الإجمالي",
    cartEmptyBtn: "افرغ السلة",
    cartCheckoutBtn: "أكمل الطلب على واتساب",
    cartEmptyMsg: "سلتك فاضية.<br>ضيف حاجة نار!",

    labelStyle: "الدرجة",
    labelSize: "الحجم",
    labelSauce: "اختار الصوص",
    doubleSinglePricing: "الأسعار موضحة للدبل والسنجل.",
    addToCart: "أضف للسلة",
    added: "تمت الإضافة",
    addedToCart: "اتضافت للسلة",

    waGreeting: "أهلاً دكتور ناشفيل، عايز أطلب:",
    waTotal: "الإجمالي",
    waPhone: "التليفون",
    waAddress: "العنوان",
  },
};

/* Translation for the shared Style/Sauce option values, since the
   underlying stored value stays in English for data consistency but
   the label shown to the person switches with the language. */
const OPTION_LABEL_AR = {
  Classic: "كلاسيك",
  Spicy: "حار",
  Nashville: "ناشفيل",
  Cheddar: "تشيدر",
  Texas: "تكساس",
  BBQ: "باربكيو",
  Boston: "بوسطن",
  Ranch: "رانش",
  "Sweet Chili": "سويت شيلي",
  "Honey Mustard": "عسل وخردل",
  Tiger: "تايجر",
};

let currentLang = localStorage.getItem("drNashvilleLang") || "en";

function t(key) {
  return (
    (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) ||
    TRANSLATIONS.en[key] ||
    key
  );
}

function optionLabel(value) {
  if (currentLang === "ar" && OPTION_LABEL_AR[value])
    return OPTION_LABEL_AR[value];
  return value;
}

function sizeLabel(size) {
  if (!size) return null;
  if (currentLang === "ar") return size === "double" ? "دبل" : "سنجل";
  return size === "double" ? "Double" : "Single";
}

function currencyLabel() {
  return currentLang === "ar" ? "ج.م" : "L.E";
}

function itemName(item) {
  return currentLang === "ar" ? item.nameAr : item.nameEn;
}

function itemSecondaryName(item) {
  return currentLang === "ar" ? item.nameEn : item.nameAr;
}

function itemDesc(item) {
  if (currentLang === "ar") return item.descAr || item.desc || "";
  return item.desc || "";
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("drNashvilleLang", lang);

  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  document.body.classList.toggle("lang-ar", lang === "ar");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.innerHTML = t(key);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.setAttribute("placeholder", t(key));
  });

  const toggleLabel = document.getElementById("langToggleLabel");
  if (toggleLabel)
    toggleLabel.textContent = lang === "ar" ? "English" : "العربية";

  // Re-render everything that's built dynamically in JS so it picks up the new language
  renderMenu();
  renderLimited();
  renderCart();
}

document.getElementById("langToggle")?.addEventListener("click", () => {
  applyLanguage(currentLang === "ar" ? "en" : "ar");
});

/* Limited Edition — Crep and Casadia, shown with the real photos you sent. */
const LIMITED_IDS = ["le2", "le1"];
const LIMITED_IMAGES = { le1: "crepnaz.jpg", le2: "casadia.jpg" };

const CAT_ICONS = {
  smash: "bi-fire",
  chicken: "bi-egg-fried",
  rolls: "bi-basket2-fill",
  trays: "bi-grid-3x3-gap-fill",
  strips: "bi-lightning-charge-fill",
  duck: "bi-box-seam-fill",
  sides: "bi-cup-hot-fill",
  extras: "bi-plus-circle-fill",
  drinks: "bi-cup-straw",
  sauces: "bi-droplet-fill",
};

/* Distinct stock photos (Pexels, free-to-use) rotated per item within
   each category, so items in the same category don't repeat the same
   photo. Swap any of these for real product photos whenever you have them. */
const PEX = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`;

const CAT_IMAGE_POOLS = {
  smash: [
    "ClassSm.jpeg",
    "DSmash.jpeg",
    "Tsmash.jpeg",
    "SmahM.jpeg",
    "SmashB.jpeg",
    "doc smash.jpeg",
    "FireB.jpeg",
  ],
  chicken: [
    "TA.jpeg",
    "F.jpeg",
    "GM.jpeg",
    "SB.jpeg",
    "RR.jpeg",
    "FF.jpeg",
    "BB.jpeg",
    "CO.jpeg",
    "solonash.jpeg",
    "big flair.jpeg",
    "BFB.png",
    "FN.png",
  ],
  rolls: [
    "Original Roll.jpeg",
    "Fly.jpeg",
    "tiger.jpeg",
    "Gaint Rool.jpeg",
    "Boston Island.jpeg",
    "po.jpg",
  ],
  trays: ["dala3.png", "d2.png", "SFA.png", "Mix.png", "mons.png"],
  strips: ["3.jpeg", "6.jpeg", "9.jpeg", "12.jpeg"],
  duck: [
    "NASH.jpeg",
    "Qua.jpeg",
    "Big.jpeg",
    "COmbo.jpeg",
    "duck.jpeg",
    "KIng.jpeg",
    "FA.jpeg",
  ],
  sides: ["Kid.jpeg", "pop.png", "DF.png", "DR3.png", "DRS.png", "Faj.jpeg"],
  extras: [
    "rice.jpeg",
    "fries.jpeg",
    1118332,
    "jar.jpeg",
    7362673,
    9650081,
    37358770,
    25897529,
    33709287,
    27352273,
  ],
  drinks: ["WATER.jpeg", "can.jpeg", "1L.jpeg"].map(PEX),
  sauces: ["sau.jpeg"],
};

/* Specific overrides for items where a generic category rotation
   wouldn't match well (rice dishes, fries, drinks, bread, etc). */
const ITEM_IMAGE_OVERRIDES = {
  ex1: "rice.jpeg", // Rizo Rice -> rice + chicken bowl
  ex2: "fries.jpeg", // Fries -> golden fries
  ex3: "BREAd.jpeg", // Bread -> basket of bread
  ex4: "jar.jpeg", // Dipping Jar -> condiment squeeze bottles
  ex5: "colo.jpeg", // Coleslaw -> coleslaw bowl
  ex6: "MS.jpeg", // Mozzarella Sticks
  ex7: "OR.jpeg", // Onion Rings
  ex8: "sau.jpeg", // Garlic Sauce -> condiments
  ex9: "str.jpeg", // Strips Piece -> chicken tenders
  ex10: "bro.jpeg", // Broasted Piece -> fried chicken piece

  sd1: "Kid.jpeg", // Kids Meal -> chicken tenders plate
  sd2: "pop.png", // Pop Nash -> popcorn-style chicken bite
  sd3: "DF.png", // Duck Fries -> loaded fries
  sd4: "DR3.png", // Duck Rizo Plain -> rice + chicken
  sd5: "DRS.png", // Duck Rizo Spicy -> rice + chicken
  sd6: "Faj.jpeg", // Duck Fajita -> rice + chicken
  sd7: "Mic2.jpeg", // Duck Mix -> mixed chicken plate
  sd8: "GD.jpeg", // Gold Fries -> golden fries
  sd9: "supreem.jpeg", // Fries Supreme -> loaded fries
  sd10: "SMF.jpeg", // Smash Fries -> golden fries

  dr1: "WATER.jpeg", // Water -> water bottles
  dr2: "can.jpeg", // Canned Soda -> soda cans
  dr3: "1L.jpeg", // Pepsi 1L -> Pepsi-Cola bottle
};

function getItemImage(item, indexInCat) {
  if (ITEM_IMAGE_OVERRIDES[item.id]) return ITEM_IMAGE_OVERRIDES[item.id];
  const pool = CAT_IMAGE_POOLS[item.cat];
  if (!pool || pool.length === 0) return null;
  return pool[indexInCat % pool.length];
}

const FLAVORS = ["Classic", "Spicy", "Nashville"];

/* ---------- CART STATE ----------
   Cart entries are keyed by `${id}::${size}::${flavor}` so the same
   sandwich in different sizes/flavors are tracked as separate lines.
   Each entry: { id, size, flavor, qty } */
let cart = JSON.parse(localStorage.getItem("drNashvilleCart") || "{}");

function cartKey(id, size, flavor) {
  return `${id}::${size || "-"}::${flavor || "-"}`;
}

function saveCart() {
  localStorage.setItem("drNashvilleCart", JSON.stringify(cart));
  renderCart();
  updateCartCount();
}

function unitPrice(item, size) {
  if (item.priceSingle) {
    return size === "single" ? item.priceSingle : item.price;
  }
  return item.price;
}

function addToCart(id, size, flavor) {
  const item = MENU.find((m) => m.id === id);
  if (!item) return;
  const key = cartKey(id, size, flavor);
  if (cart[key]) {
    cart[key].qty += 1;
  } else {
    cart[key] = { id, size: size || null, flavor: flavor || null, qty: 1 };
  }
  saveCart();
  const label = [itemName(item), optionLabel(flavor), sizeLabel(size)]
    .filter(Boolean)
    .join(" · ");
  showToast(`${label} ${t("addedToCart")}`);
}

function changeQty(key, delta) {
  if (!cart[key]) return;
  cart[key].qty += delta;
  if (cart[key].qty <= 0) delete cart[key];
  saveCart();
}

function removeItem(key) {
  delete cart[key];
  saveCart();
}

function emptyCart() {
  cart = {};
  saveCart();
}

function cartTotal() {
  return Object.values(cart).reduce((sum, entry) => {
    const item = MENU.find((m) => m.id === entry.id);
    return item ? sum + unitPrice(item, entry.size) * entry.qty : sum;
  }, 0);
}

function updateCartCount() {
  const count = Object.values(cart).reduce((a, e) => a + e.qty, 0);
  document.getElementById("cartCount").textContent = count;
}

function renderCart() {
  const container = document.getElementById("cartItems");
  const entries = Object.entries(cart);
  if (entries.length === 0) {
    container.innerHTML = `<div class="cart-empty"><i class="bi bi-bag-x"></i><p>${t("cartEmptyMsg")}</p></div>`;
  } else {
    container.innerHTML = entries
      .map(([key, entry]) => {
        const item = MENU.find((m) => m.id === entry.id);
        if (!item) return "";
        const price = unitPrice(item, entry.size);
        const variantLabel = [optionLabel(entry.flavor), sizeLabel(entry.size)]
          .filter(Boolean)
          .join(" · ");
        return `
        <div class="cart-item">
          <div class="cart-item-thumb"><i class="bi ${CAT_ICONS[item.cat] || "bi-basket-fill"}"></i></div>
          <div class="cart-item-info">
            <h6>${itemName(item)}</h6>
            ${variantLabel ? `<span class="cart-item-variant">${variantLabel}</span>` : ""}
            <span class="cart-item-price">${price} ${currencyLabel()}</span>
            <div class="qty-control mt-1">
              <button onclick="changeQty('${key}',-1)" aria-label="Decrease quantity"><i class="bi bi-dash"></i></button>
              <span>${entry.qty}</span>
              <button onclick="changeQty('${key}',1)" aria-label="Increase quantity"><i class="bi bi-plus"></i></button>
            </div>
          </div>
          <button class="cart-item-remove" onclick="removeItem('${key}')" aria-label="Remove item"><i class="bi bi-x-lg"></i></button>
        </div>`;
      })
      .join("");
  }
  document.getElementById("cartTotal").textContent =
    `${cartTotal()} ${currencyLabel()}`;

  // Build a WhatsApp order summary — items, then phone, then address, then total last
  const wa = document.getElementById("checkoutBtn");
  if (entries.length) {
    let msg = `${t("waGreeting")}%0A`;
    entries.forEach(([key, entry]) => {
      const item = MENU.find((m) => m.id === entry.id);
      if (!item) return;
      const price = unitPrice(item, entry.size);
      const variantLabel = [optionLabel(entry.flavor), sizeLabel(entry.size)]
        .filter(Boolean)
        .join(", ");
      msg += `- ${itemName(item)}${variantLabel ? ` (${variantLabel})` : ""} x${entry.qty} (${price * entry.qty} ${currencyLabel()})%0A`;
    });
    const phone = (
      document.getElementById("customerPhone")?.value || ""
    ).trim();
    const address = (
      document.getElementById("customerAddress")?.value || ""
    ).trim();
    msg += `${t("waPhone")}: ${phone || "-"}%0A`;
    msg += `${t("waAddress")}: ${address || "-"}%0A`;
    msg += `${t("waTotal")}: ${cartTotal()} ${currencyLabel()}`;
    wa.href = `https://wa.me/201031219787?text=${msg}`;
  } else {
    wa.href = "https://wa.me/201031219787";
  }
}

/* ---------- RENDER MENU ---------- */
function menuCardHTML(item, imgUrl) {
  const priceHTML = item.priceSingle
    ? `<span class="menu-card-price">${item.price} / ${item.priceSingle} ${currencyLabel()}</span>`
    : `<span class="menu-card-price">${item.price} ${currencyLabel()}</span>`;

  const STYLE_CATEGORIES = [
    "chicken",
    "rolls",
    "duck",
    "trays",
    "strips",
    "limited",
  ];
  const showStyleChoice = STYLE_CATEGORIES.includes(item.cat);
  const hasSauceChoice = !!item.sauceOptions;

  let variantHTML = "";
  if (showStyleChoice) {
    variantHTML = `
    <div class="variant-row">
      ${
        item.priceSingle
          ? `
      <div class="variant-group">
        <label>${t("labelSize")}</label>
        <select class="variant-size">
          <option value="double">${sizeLabel("double")} (${item.price} ${currencyLabel()})</option>
          <option value="single">${sizeLabel("single")} (${item.priceSingle} ${currencyLabel()})</option>
        </select>
      </div>`
          : ""
      }
      <div class="variant-group">
        <label>${t("labelStyle")}</label>
        <select class="variant-flavor">
          ${FLAVORS.map((f) => `<option value="${f}">${optionLabel(f)}</option>`).join("")}
        </select>
      </div>
    </div>`;
  } else if (hasSauceChoice) {
    variantHTML = `
    <div class="variant-row">
      <div class="variant-group variant-group-full">
        <label>${t("labelSauce")}</label>
        <select class="variant-flavor">
          ${item.sauceOptions.map((s) => `<option value="${s}">${optionLabel(s)}</option>`).join("")}
        </select>
      </div>
    </div>`;
  }

  return `
    <div class="col-md-6 col-lg-4 menu-item" data-cat="${item.cat}">
      <div class="menu-card">
        <div class="menu-card-img" onclick="openLightbox('${imgUrl || ""}','${item.cat}')">
          ${
            imgUrl
              ? `
          <img src="${imgUrl}" alt="${item.nameEn}" loading="lazy"
               onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="menu-card-img-fallback"><i class="bi ${CAT_ICONS[item.cat] || "bi-basket-fill"}"></i></div>`
              : `<i class="bi ${CAT_ICONS[item.cat] || "bi-basket-fill"}"></i>`
          }
        </div>
        <div class="menu-card-body">
          <div class="menu-card-top">
            <div>
              <div class="menu-card-name">${itemName(item)}</div>
              <div class="menu-card-name-ar ar">${itemSecondaryName(item)}</div>
            </div>
            ${priceHTML}
          </div>
          <p class="menu-card-desc">${itemDesc(item)}${item.priceSingle ? `<br><strong>${t("doubleSinglePricing")}</strong>` : ""}</p>
          ${variantHTML}
          <button class="menu-add-btn" onclick="handleAddClick(this,'${item.id}')">
            <i class="bi bi-bag-plus"></i> ${t("addToCart")}
          </button>
        </div>
      </div>
    </div>`;
}

function handleAddClick(btn, id) {
  const card = btn.closest(".menu-card, .limited-card");
  const sizeSelect = card.querySelector(".variant-size");
  const flavorSelect = card.querySelector(".variant-flavor");
  const size = sizeSelect ? sizeSelect.value : null;
  const flavor = flavorSelect ? flavorSelect.value : null;

  addToCart(id, size, flavor);
  btn.classList.add("added");
  const addToCartHTML = `<i class="bi bi-bag-plus"></i> ${t("addToCart")}`;
  btn.innerHTML = `<i class="bi bi-check2"></i> ${t("added")}`;
  setTimeout(() => {
    btn.classList.remove("added");
    btn.innerHTML = addToCartHTML;
  }, 1200);
}

function renderMenu() {
  const grid = document.getElementById("menuGrid");
  const counters = {};
  const items = MENU;
  grid.innerHTML = items
    .map((item) => {
      const idx = counters[item.cat] || 0;
      counters[item.cat] = idx + 1;
      const imgUrl = LIMITED_IMAGES[item.id] || getItemImage(item, idx);
      return menuCardHTML(item, imgUrl);
    })
    .join("");
  observeReveals();
}

function renderLimited() {
  const grid = document.getElementById("limitedGrid");
  if (LIMITED_IDS.length === 0) {
    grid.innerHTML = `
      <div class="col-12">
        <div class="limited-empty reveal">
          <i class="bi bi-hourglass-split"></i>
          <p>${t("limitedEmpty")}</p>
        </div>
      </div>`;
    observeReveals();
    return;
  }
  grid.innerHTML = LIMITED_IDS.map((id) => {
    const item = MENU.find((m) => m.id === id);
    if (!item) return "";
    const imgUrl = LIMITED_IMAGES[item.id];
    return `
      <div class="col-md-6 col-lg-5">
        <div class="limited-card reveal">
          <span class="limited-badge"><i class="bi bi-star-fill"></i> ${t("limitedBadge")}</span>
          <div class="limited-img">
            ${
              imgUrl
                ? `<img src="${imgUrl}" alt="${item.nameEn}" style="width:100%;height:100%;object-fit:cover;">`
                : `<i class="bi ${CAT_ICONS[item.cat] || "bi-fire"}"></i>`
            }
          </div>
          <div class="limited-body">
            <h4>${itemName(item)}</h4>
            <span class="ar">${itemSecondaryName(item)}</span>
            <p class="limited-desc">${itemDesc(item)}</p>
            <div class="variant-row">
              <div class="variant-group variant-group-full">
                <label>${t("labelStyle")}</label>
                <select class="variant-flavor">
                  ${FLAVORS.map((f) => `<option value="${f}">${optionLabel(f)}</option>`).join("")}
                </select>
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center mt-2">
              <span class="limited-price">${item.price} ${currencyLabel()}</span>
              <button class="btn btn-fire btn-sm" onclick="handleAddClick(this,'${item.id}')">
                <i class="bi bi-bag-plus"></i> ${t("addToCart")}
              </button>
            </div>
            <p class="limited-tag mt-2 mb-0">${t("limitedTag")}</p>
          </div>
        </div>
      </div>`;
  }).join("");
  observeReveals();
}

/* ---------- FILTERS ---------- */
document.getElementById("menuFilters").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  document
    .querySelectorAll(".filter-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  const filter = btn.dataset.filter;
  document.querySelectorAll(".menu-item").forEach((el) => {
    const show = filter === "all" || el.dataset.cat === filter;
    el.style.display = show ? "" : "none";
  });
});

/* ---------- TOAST ---------- */
let toastInstance;
function showToast(msg) {
  document.getElementById("toastMsg").textContent = msg;
  const el = document.getElementById("cartToast");
  toastInstance = bootstrap.Toast.getOrCreateInstance(el, { delay: 1800 });
  toastInstance.show();
}

/* ---------- LIGHTBOX ---------- */
function openLightbox(url, cat) {
  const lightbox = document.getElementById("lightbox");
  document.getElementById("lightboxContent").innerHTML = url
    ? `<img src="${url}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;" onerror="this.parentElement.innerHTML='<i class=&quot;bi ${CAT_ICONS[cat] || "bi-basket-fill"}&quot;></i>';">`
    : `<i class="bi ${CAT_ICONS[cat] || "bi-basket-fill"}"></i>`;
  lightbox.classList.add("show");
}
document.getElementById("lightboxClose").addEventListener("click", () => {
  document.getElementById("lightbox").classList.remove("show");
});
document.getElementById("lightbox").addEventListener("click", (e) => {
  if (e.target.id === "lightbox") e.currentTarget.classList.remove("show");
});

/* ---------- NAVBAR SCROLL STATE ---------- */
const nav = document.getElementById("mainNav");
function onScroll() {
  nav.classList.toggle("scrolled", window.scrollY > 40);
  document
    .getElementById("backToTop")
    .classList.toggle("show", window.scrollY > 500);
  highlightNav();
}
window.addEventListener("scroll", onScroll);

/* ---------- SCROLLSPY / SECTION HIGHLIGHT ---------- */
const sections = document.querySelectorAll("section[id], header[id]");
const navLinks = document.querySelectorAll(".nav-link");
function highlightNav() {
  let current = "";
  sections.forEach((sec) => {
    const top = sec.offsetTop - 120;
    if (window.scrollY >= top) current = sec.id;
  });
  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`,
    );
  });
}

/* ---------- SMOOTH SCROLL (collapse mobile menu on click) ---------- */
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const collapse = document.getElementById("navMenu");
    if (collapse.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(collapse).hide();
    }
  });
});

/* ---------- BACK TO TOP ---------- */
document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ---------- SCROLL REVEAL ---------- */
let revealObserver;
function observeReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
  }
  document
    .querySelectorAll(".reveal:not(.in)")
    .forEach((el) => revealObserver.observe(el));
}

/* ---------- EMBERS (hero ambient particles) ---------- */
function spawnEmbers() {
  const container = document.getElementById("hero-embers");
  const count = window.innerWidth < 576 ? 14 : 26;
  for (let i = 0; i < count; i++) {
    const p = document.createElement("span");
    p.className = "ember-particle";
    const size = 3 + Math.random() * 5;
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.left = `${Math.random() * 100}%`;
    p.style.setProperty("--drift", `${Math.random() * 80 - 40}px`);
    p.style.animationDuration = `${6 + Math.random() * 8}s`;
    p.style.animationDelay = `${Math.random() * 10}s`;
    container.appendChild(p);
  }
}

/* ---------- EMPTY CART BUTTON ---------- */
document.getElementById("emptyCartBtn").addEventListener("click", emptyCart);

/* ---------- LIVE UPDATE WHATSAPP LINK ON CONTACT INFO CHANGE ---------- */
["customerPhone", "customerAddress"].forEach((id) => {
  document.getElementById(id).addEventListener("input", renderCart);
});

/* ---------- INIT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  applyLanguage(currentLang); // also renders menu, limited edition, and cart
  updateCartCount();
  spawnEmbers();
  observeReveals();
  onScroll();

  // Hide loader
  window.addEventListener("load", () => {
    setTimeout(
      () => document.getElementById("loader").classList.add("hidden"),
      400,
    );
  });
  setTimeout(
    () => document.getElementById("loader").classList.add("hidden"),
    1800,
  );
});
