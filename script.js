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
  },
  {
    id: "sm2",
    cat: "smash",
    nameEn: "Double Smash",
    nameAr: "دبل سماش",
    price: 160,
    desc: "Two smash patties, double cheddar, fries, caramelized onions,Texas,BBQ.",
  },
  {
    id: "sm3",
    cat: "smash",
    nameEn: "Triple Smash",
    nameAr: "تريبل سماش",
    price: 210,
    desc: "Three smash patties, melted cheddar,  fries, caramelized onions,Texas,BBQ.",
  },
  {
    id: "sm4",
    cat: "smash",
    nameEn: "Smash Mushroom",
    nameAr: "سماش مشروم",
    price: 190,
    desc: "Smash patties, sautéed mushroom, cheddar,  fries, caramelized onions,Bosten,BBQ.",
  },
  {
    id: "sm5",
    cat: "smash",
    nameEn: "Smash Bacon",
    nameAr: "سماش بيكون",
    price: 140,
    desc: "Smash patty, crispy beef bacon, cheddar,  fries, caramelized onions,Texas,BBQ.",
  },
  {
    id: "sm6",
    cat: "smash",
    nameEn: "Dr Smash",
    nameAr: "دكتور سماش",
    price: 200,
    desc: "Smash patty,rispy chicken fillet, —  fries, caramelized onions,Texas,BBQ,cheddar.",
  },
  {
    id: "sm7",
    cat: "smash",
    nameEn: "Fire Burger",
    nameAr: "فاير برجر",
    price: 130,
    desc: "Smash patty, spicy sauce, pickled jalapeño, cheddar, fries, caramelized onions,Texas,BBQ.",
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
  },
  {
    id: "ch2",
    cat: "chicken",
    nameEn: "Florida",
    nameAr: "فلوريدا",
    price: 165,
    priceSingle: 105,
    desc: "Crispy chicken grilled, fries, Texas,katcheb.",
  },
  {
    id: "ch3",
    cat: "chicken",
    nameEn: "Golden Mountain",
    nameAr: "جولدن ماونتين",
    price: 175,
    priceSingle: 115,
    desc: "Crispy chicken fillet, cheddar,Texas,fries .",
  },
  {
    id: "ch4",
    cat: "chicken",
    nameEn: "Smoky Beast",
    nameAr: "سموكي بيست",
    price: 180,
    priceSingle: 120,
    desc: "Crispy chicken fillet, smoky BBQ sauce, Texas,Bacon,fries.",
  },
  {
    id: "ch5",
    cat: "chicken",
    nameEn: "Rock Ranch",
    nameAr: "روك رانش",
    price: 185,
    priceSingle: 125,
    desc: "Crispy chicken fillet, ranch sauce, fries, mayo,mozzarella sticks.",
  },
  {
    id: "ch6",
    cat: "chicken",
    nameEn: "Flash Fire",
    nameAr: "فلاش فاير",
    price: 175,
    priceSingle: 115,
    desc: "Crispy chicken fillet, Texas,fires,pickled jalapeño,tiger sauce.",
  },
  {
    id: "ch7",
    cat: "chicken",
    nameEn: "Bee Bomb",
    nameAr: "بي بومب",
    price: 175,
    priceSingle: 115,
    desc: "Crispy chicken fillet, honey mustard, sweetchilli,fries,smoked turkey.",
  },
  {
    id: "ch8",
    cat: "chicken",
    nameEn: "Creamy Onion",
    nameAr: "كريمي اونيون",
    price: 195,
    priceSingle: 130,
    desc: "Crispy chicken fillet, creamy onion sauce, fries,onion rings .",
  },
  {
    id: "ch9",
    cat: "chicken",
    nameEn: "Solo Nash",
    nameAr: "سولو ناش",
    price: 200,
    priceSingle: 130,
    desc: " chicken fillet, coleslaw, fries, 1000island.",
  },
  {
    id: "ch10",
    cat: "chicken",
    nameEn: "Big Flair Jalapeño",
    nameAr: "بيج فلير هالبينو",
    price: 160,
    desc: "Three fillets, pickled jalapeño, mayo,BBQ,Texas,cheddar,.",
  },
  {
    id: "ch11",
    cat: "chicken",
    nameEn: "Big Flair Buffalo",
    nameAr: "بيج فلير بافلو",
    price: 165,
    desc: "Three fillets, buffalo sauce, mayo,BBQ,cheddar.",
  },
  {
    id: "ch12",
    cat: "chicken",
    nameEn: "Flair Nash",
    nameAr: "فلير ناش",
    price: 170,
    desc: "Three fillets,coleslaw, 1000island.",
  },

  // ROLLS
  {
    id: "rl1",
    cat: "rolls",
    nameEn: "Original Roll",
    nameAr: "اوريجينال رول",
    price: 100,
    desc: "Roll bread, lettuce, chicken strips, fries, cheddar,Texas.",
  },
  {
    id: "rl2",
    cat: "rolls",
    nameEn: "Fly Rap",
    nameAr: "فلاي راب",
    price: 115,
    desc: "Wrapped roll, chicken, lettuce, fries,  smoked turkey,cheddar,Bistan,BBQ.",
  },
  {
    id: "rl3",
    cat: "rolls",
    nameEn: "Tiger Shot",
    nameAr: "تايجر شوت",
    price: 115,
    desc: "Roll bread, chicken strips, tiger sauce,pickled jalapeño,Texas .",
  },
  {
    id: "rl4",
    cat: "rolls",
    nameEn: "Giant Roll",
    nameAr: "جاينت رول",
    price: 145,
    desc: "Large roll, extra chicken, mozzarella sticks, smoked turkey,.",
  },
  {
    id: "rl5",
    cat: "rolls",
    nameEn: "Boston Island",
    nameAr: "بوسطن آيسلاند",
    price: 110,
    desc: "Roll bread, chicken strips, Boston sauce,cheddar,Bosten,1000island .",
  },
  {
    id: "rl6",
    cat: "rolls",
    nameEn: "Mighty Potato",
    nameAr: "مايتي بوتيتو",
    price: 50,
    desc: "Loaded potato roll with ketchup,Garlicky.",
  },

  // TRAYS
  {
    id: "tr1",
    cat: "trays",
    nameEn: "Dala3 Tray",
    nameAr: "صنية الدلع",
    price: 400,
    desc: "Sharing tray — broasted pieces, duck rizo, fries.",
  },
  {
    id: "tr2",
    cat: "trays",
    nameEn: "Duetto Tray",
    nameAr: "صنية الدويتو",
    price: 440,
    desc: "Sharing tray for two — mixed fried chicken pieces, sides.",
  },
  {
    id: "tr3",
    cat: "trays",
    nameEn: "Family Tray",
    nameAr: "صنية العيلة",
    price: 520,
    desc: "Family-size tray — broasted, rizo, duck box, sides.",
  },
  {
    id: "tr4",
    cat: "trays",
    nameEn: "Mix Tray",
    nameAr: "صنية الميكس",
    price: 540,
    desc: "Mixed tray — strips, broasted, rizo, coleslaw, sides.",
  },
  {
    id: "tr5",
    cat: "trays",
    nameEn: "Monster Tray",
    nameAr: "صنية الوحش",
    price: 820,
    desc: "Our largest tray — loaded with pieces, sides and sauces.",
  },

  // STRIPS MEALS
  {
    id: "st1",
    cat: "strips",
    nameEn: "3 Pcs Strips Meal",
    nameAr: "٣ قطع استربس",
    price: 155,
    desc: "3 crispy chicken strips with fries and Rizzo and garlicky.",
  },
  {
    id: "st2",
    cat: "strips",
    nameEn: "6 Pcs Strips Meal",
    nameAr: "٦ قطع استربس",
    price: 260,
    desc: "6 crispy chicken strips with fries and Rizzo and garlicky.",
  },
  {
    id: "st3",
    cat: "strips",
    nameEn: "9 Pcs Strips Meal",
    nameAr: "٩ قطع استربس",
    price: 395,
    desc: "9 crispy chicken strips with fries and Rizzo and garlicky.",
  },
  {
    id: "st4",
    cat: "strips",
    nameEn: "12 Pcs Strips Meal",
    nameAr: "١٢ قطعة استربس",
    price: 495,
    desc: "12 crispy chicken strips with fries and Rizzo and garlicky.",
  },

  // DUCK MEALS
  {
    id: "dk1",
    cat: "duck",
    nameEn: "Nash Box",
    nameAr: "ناش بوكس",
    price: 125,
    desc: "2 pieces — fries, Rizzo, coleslaw,garlicky.",
  },
  {
    id: "dk2",
    cat: "duck",
    nameEn: "Quarter Box",
    nameAr: "كوارتر بوكس",
    price: 210,
    desc: "4 pieces — fries,2Rizzo, coleslaw,garlicky.",
  },
  {
    id: "dk3",
    cat: "duck",
    nameEn: "Big Box",
    nameAr: "بيج بوكس",
    price: 300,
    desc: "6 pieces — fries, 3 Rizzo, 3 coleslaw,2 garlicky.",
  },
  {
    id: "dk4",
    cat: "duck",
    nameEn: "Combo Box",
    nameAr: "كومبو بوكس",
    price: 430,
    desc: "9 pieces  —fries, 3 Rizzo,3 coleslaw,3 garlicky,1Lpepsi.",
  },
  {
    id: "dk5",
    cat: "duck",
    nameEn: "Duck Box",
    nameAr: "دوك بوكس",
    price: 570,
    desc: "13 pieces  — fries, 4 Rizzo, 4 coleslaw,4 garlicky,1Lpepsi.",
  },
  {
    id: "dk6",
    cat: "duck",
    nameEn: "King Box",
    nameAr: "كينج بوكس",
    price: 720,
    desc: "15 pieces 5 fries, 5 Rizzo, 5 coleslaw, 5 garlicky,1Lpepsi.",
  },
  {
    id: "dk7",
    cat: "duck",
    nameEn: "Family Box",
    nameAr: "فاميلي بوكس",
    price: 800,
    desc: "18 pieces, fries, 6 Rizzo, 6 coleslaw,6 garlicky,2Lpepsi.",
  },

  // SIDE ITEMS
  {
    id: "sd1",
    cat: "sides",
    nameEn: "Kids Meal",
    nameAr: "وجبة الأطفال",
    price: 75,
    desc: "Broasted piece, fries, bread, rice, juice.",
  },
  {
    id: "sd2",
    cat: "sides",
    nameEn: "Pop Nash",
    nameAr: "بوب ناش",
    price: 80,
    desc: "Popcorn chicken pieces, sweet chili sauce.",
  },
  {
    id: "sd3",
    cat: "sides",
    nameEn: "Duck Fries",
    nameAr: "دوك فرايز",
    price: 90,
    desc: "Loaded fries — chicken strips, cheddar,Texas, jalapeño.",
  },
  {
    id: "sd4",
    cat: "sides",
    nameEn: "Duck Rizo (Plain)",
    nameAr: "دوك ريزو عادي",
    price: 90,
    desc: "Rice with chicken strips, sweet chili, Texas.",
  },
  {
    id: "sd5",
    cat: "sides",
    nameEn: "Duck Rizo (Spicy)",
    nameAr: "دوك ريزو سبايسي",
    price: 90,
    desc: "Rice with chicken strips, Tiger sauce, jalapeño, Texas.",
  },
  {
    id: "sd6",
    cat: "sides",
    nameEn: "Duck Fajita",
    nameAr: "دوك فاهيتا",
    price: 95,
    desc: "Rice, Fajita, BBQ.",
  },
  {
    id: "sd7",
    cat: "sides",
    nameEn: "Duck Mix",
    nameAr: "دوك ميكس",
    price: 180,
    desc: "1/3 duck Rizo, 1/3fahita, 1/3 chease fries,with de.basville sauces.",
  },
  {
    id: "sd8",
    cat: "sides",
    nameEn: "Gold Fries",
    nameAr: "جولد فرايز",
    price: 65,
    desc: "Fries topped with cheddar sauce.",
  },
  {
    id: "sd9",
    cat: "sides",
    nameEn: "Fries Supreme",
    nameAr: "فرايز سوبريم",
    price: 100,
    desc: "Fries, beef bacon, cheddar, strips pieces,,smoked turkey,testy.",
  },
  {
    id: "sd10",
    cat: "sides",
    nameEn: "Smash Fries",
    nameAr: "سماش فرايز",
    price: 95,
    desc: "Fries, smash beef pieces, cheddar sauce.",
  },

  // EXTRAS
  {
    id: "ex1",
    cat: "extras",
    nameEn: "Rizo Rice",
    nameAr: "أرز ريزو",
    price: 20,
    desc: "Side portion of our seasoned rizo rice.",
  },
  {
    id: "ex2",
    cat: "extras",
    nameEn: "Fries",
    nameAr: "فرايز",
    price: 20,
    desc: "Classic crispy golden fries, lightly salted.",
  },
  {
    id: "ex3",
    cat: "extras",
    nameEn: "Bread",
    nameAr: "خبز",
    price: 5,
    desc: "Fresh side bread.",
  },
  {
    id: "ex4",
    cat: "extras",
    nameEn: "Dipping Jar",
    nameAr: "دبينج جار",
    price: 60,
    desc: "A jar of our house dipping sauce.",
  },
  {
    id: "ex5",
    cat: "extras",
    nameEn: "Coleslaw",
    nameAr: "كولسلو",
    price: 20,
    desc: "Fresh, creamy house-made coleslaw.",
  },
  {
    id: "ex6",
    cat: "extras",
    nameEn: "Mozzarella Sticks",
    nameAr: "اصابع موتزريلا",
    price: 40,
    desc: "Crispy fried mozzarella sticks, golden and gooey.",
  },
  {
    id: "ex7",
    cat: "extras",
    nameEn: "Onion Rings",
    nameAr: "حلقات بصل",
    price: 40,
    desc: "Crunchy battered onion rings.",
  },
  {
    id: "ex8",
    cat: "extras",
    nameEn: "Garlic Sauce",
    nameAr: "تومية",
    price: 10,
    desc: "Side portion of our house garlic sauce.",
  },
  {
    id: "ex9",
    cat: "extras",
    nameEn: "Strips Piece",
    nameAr: "قطعة استربس",
    price: 45,
    desc: "One extra crispy chicken strip.",
  },
  {
    id: "ex10",
    cat: "extras",
    nameEn: "Broasted Piece",
    nameAr: "قطعة بروست",
    price: 50,
    desc: "One extra broasted chicken piece.",
  },

  // DRINKS
  {
    id: "dr1",
    cat: "drinks",
    nameEn: "Water",
    nameAr: "مياه",
    price: 10,
    desc: "Chilled bottled water.",
  },
  {
    id: "dr2",
    cat: "drinks",
    nameEn: "Canned Soda",
    nameAr: "كانز",
    price: 20,
    desc: "Your choice of chilled canned soft drink.",
  },
  {
    id: "dr3",
    cat: "drinks",
    nameEn: "Pepsi (1L)",
    nameAr: "لتر بيبسي",
    price: 40,
    desc: "1 Liter bottle of Pepsi, chilled and ready to share.",
  },

  // SAUCES
  {
    id: "sa1",
    cat: "sauces",
    nameEn: "Sauce of Choice",
    nameAr: "اختيارات الصوص",
    price: 20,
    desc: "Pick your dip.",
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
  },

  // LIMITED EDITION
  {
    id: "le1",
    cat: "limited",
    nameEn: "Crep Naz",
    nameAr: "كريب ناز",
    price: 100,
    desc: "Toasted folded flatbread stuffed with chicken, melted cheese, fries and house sauces — pick your heat.",
    styleChoice: true,
  },
  {
    id: "le2",
    cat: "limited",
    nameEn: "Casadia",
    nameAr: "كاساديا",
    price: 120,
    desc: "Grilled loaded quesadilla-style wrap, sliced chicken, melted cheese, crispy fries and creamy sauce, finished with fresh herbs — pick your heat.",
    styleChoice: true,
  },
];

/* Limited Edition — Crep Naz and Casadia, shown with the real photos you sent. */
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
  const label = [
    item.nameEn,
    flavor,
    size ? (size === "double" ? "Double" : "Single") : null,
  ]
    .filter(Boolean)
    .join(" · ");
  showToast(`${label} added to cart`);
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
    container.innerHTML = `<div class="cart-empty"><i class="bi bi-bag-x"></i><p>Your cart is empty.<br>Add something fired up!</p></div>`;
  } else {
    container.innerHTML = entries
      .map(([key, entry]) => {
        const item = MENU.find((m) => m.id === entry.id);
        if (!item) return "";
        const price = unitPrice(item, entry.size);
        const variantLabel = [
          entry.flavor,
          entry.size ? (entry.size === "double" ? "Double" : "Single") : null,
        ]
          .filter(Boolean)
          .join(" · ");
        return `
        <div class="cart-item">
          <div class="cart-item-thumb"><i class="bi ${CAT_ICONS[item.cat] || "bi-basket-fill"}"></i></div>
          <div class="cart-item-info">
            <h6>${item.nameEn}</h6>
            ${variantLabel ? `<span class="cart-item-variant">${variantLabel}</span>` : ""}
            <span class="cart-item-price">${price} L.E</span>
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
  document.getElementById("cartTotal").textContent = `${cartTotal()} L.E`;

  // Build a WhatsApp order summary
  const wa = document.getElementById("checkoutBtn");
  if (entries.length) {
    let msg = "Hi Dr. Nashville, I'd like to order:%0A";
    entries.forEach(([key, entry]) => {
      const item = MENU.find((m) => m.id === entry.id);
      if (!item) return;
      const price = unitPrice(item, entry.size);
      const variantLabel = [
        entry.flavor,
        entry.size ? (entry.size === "double" ? "Double" : "Single") : null,
      ]
        .filter(Boolean)
        .join(", ");
      msg += `- ${item.nameEn}${variantLabel ? ` (${variantLabel})` : ""} x${entry.qty} (${price * entry.qty} L.E)%0A`;
    });
    msg += `Total: ${cartTotal()} L.E`;
    wa.href = `https://wa.me/201031219787?text=${msg}`;
  } else {
    wa.href = "https://wa.me/201031219787";
  }
}

/* ---------- RENDER MENU ---------- */
function menuCardHTML(item, imgUrl) {
  const priceHTML = item.priceSingle
    ? `<span class="menu-card-price">${item.price} / ${item.priceSingle} L.E</span>`
    : `<span class="menu-card-price">${item.price} L.E</span>`;

  const STYLE_CATEGORIES = ["chicken", "rolls", "duck", "trays", "strips", "limited"];
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
        <label>Size</label>
        <select class="variant-size">
          <option value="double">Double (${item.price} L.E)</option>
          <option value="single">Single (${item.priceSingle} L.E)</option>
        </select>
      </div>`
          : ""
      }
      <div class="variant-group">
        <label>Style</label>
        <select class="variant-flavor">
          ${FLAVORS.map((f) => `<option value="${f}">${f}</option>`).join("")}
        </select>
      </div>
    </div>`;
  } else if (hasSauceChoice) {
    variantHTML = `
    <div class="variant-row">
      <div class="variant-group variant-group-full">
        <label>Choose your sauce</label>
        <select class="variant-flavor">
          ${item.sauceOptions.map((s) => `<option value="${s}">${s}</option>`).join("")}
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
              <div class="menu-card-name">${item.nameEn}</div>
              <div class="menu-card-name-ar ar">${item.nameAr}</div>
            </div>
            ${priceHTML}
          </div>
          <p class="menu-card-desc">${item.desc || ""}${item.priceSingle ? "<br><strong>Double / Single</strong> pricing shown." : ""}</p>
          ${variantHTML}
          <button class="menu-add-btn" onclick="handleAddClick(this,'${item.id}')">
            <i class="bi bi-bag-plus"></i> Add to Cart
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
  btn.innerHTML = `<i class="bi bi-check2"></i> Added`;
  setTimeout(() => {
    btn.classList.remove("added");
    btn.innerHTML = `<i class="bi bi-bag-plus"></i> Add to Cart`;
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
          <p>Nothing here yet — new limited drops are on the way. Check back soon.</p>
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
          <span class="limited-badge"><i class="bi bi-star-fill"></i> Limited</span>
          <div class="limited-img">
            ${
              imgUrl
                ? `<img src="${imgUrl}" alt="${item.nameEn}" style="width:100%;height:100%;object-fit:cover;">`
                : `<i class="bi ${CAT_ICONS[item.cat] || "bi-fire"}"></i>`
            }
          </div>
          <div class="limited-body">
            <h4>${item.nameEn}</h4>
            <span class="ar">${item.nameAr}</span>
            <p class="limited-desc">${item.desc || ""}</p>
            <div class="variant-row">
              <div class="variant-group variant-group-full">
                <label>Style</label>
                <select class="variant-flavor">
                  ${FLAVORS.map((f) => `<option value="${f}">${f}</option>`).join("")}
                </select>
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center mt-2">
              <span class="limited-price">${item.price} L.E</span>
              <button class="btn btn-fire btn-sm" onclick="handleAddClick(this,'${item.id}')">
                <i class="bi bi-bag-plus"></i> Add
              </button>
            </div>
            <p class="limited-tag mt-2 mb-0">While supplies last</p>
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

/* ---------- INIT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  renderMenu();
  renderLimited();
  renderCart();
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
