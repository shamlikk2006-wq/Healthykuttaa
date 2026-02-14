// --- CONFIG & STATE ---
const CONFIG = {
    dailyGoal: 2000,
    waterGoal: 8,
    storageKey: 'healthykuttaa_v2'
};

let state = {
    consumed: [],
    water: 0,
    theme: 'light' // Default Natural Theme (Beige/Olive)
};

// --- DATASETS ---
const FOOD_DB = [
    { name: "Puttu", cal: 300, cat: "Neutral" },
    { name: "Kadala Curry", cal: 250, cat: "Healthy" },
    { name: "Appam", cal: 120, cat: "Neutral" },
    { name: "Stew (Vegetable)", cal: 180, cat: "Healthy" },
    { name: "Porotta", cal: 350, cat: "Fast Food" },
    { name: "Chappathi", cal: 120, cat: "Neutral" },
    { name: "Sadhya (Average Plate)", cal: 600, cat: "Healthy" },
    { name: "Idli", cal: 70, cat: "Healthy" },
    { name: "Dosa", cal: 180, cat: "Neutral" },
    { name: "Masala Dosa", cal: 350, cat: "Fast Food" },
    { name: "Upma", cal: 220, cat: "Neutral" },
    { name: "Idiyappam", cal: 130, cat: "Neutral" },
    { name: "Egg Roast", cal: 250, cat: "Neutral" },
    { name: "Chicken Curry", cal: 320, cat: "Neutral" },
    { name: "Chicken Fry", cal: 400, cat: "Fast Food" },
    { name: "Fish Curry", cal: 280, cat: "Healthy" },
    { name: "Fish Fry", cal: 350, cat: "Fast Food" },
    { name: "Beef Fry", cal: 450, cat: "Fast Food" },
    { name: "Parippu Curry", cal: 150, cat: "Healthy" },
    { name: "Avial", cal: 160, cat: "Healthy" },
    { name: "Thoran", cal: 120, cat: "Healthy" },
    { name: "Sambar", cal: 140, cat: "Healthy" },
    { name: "Rasam", cal: 60, cat: "Healthy" },
    { name: "Rice (1 cup)", cal: 200, cat: "Neutral" },
    { name: "Curd", cal: 100, cat: "Healthy" },
    { name: "Banana", cal: 90, cat: "Healthy" },
    { name: "Payasam", cal: 300, cat: "Fast Food" },
    { name: "Vada", cal: 250, cat: "Fast Food" },
    { name: "Pazham Pori", cal: 280, cat: "Fast Food" },
    { name: "Tea (with sugar)", cal: 60, cat: "Neutral" }
];

const RECIPES = [
    {
        meal: "Parippu Sadham",
        ingredients: ["Cooked Rice", "Toor Dal", "Turmeric", "Ghee", "Salt"],
        desc: "Simple comfort food with rice and dal."
    },
    {
        meal: "Fish Curry Meal",
        ingredients: ["Cooked Rice", "Fish", "Shallots", "Ginger", "Garlic", "Chilli Powder", "Turmeric", "Coconut Milk", "Tamarind", "Curry Leaves", "Coconut Oil", "Salt"],
        desc: "Spicy fish curry served with steamed rice."
    },
    {
        meal: "Chicken Roll",
        ingredients: ["Maida", "Chicken", "Onion", "Cabbage", "Carrot", "Green Chilli", "Pepper", "Chilli Sauce", "Oil", "Salt"],
        desc: "Tasty chicken filling wrapped in a roll."
    },
    {
        meal: "Puttu Kadala Combo",
        ingredients: ["Rice Flour", "Grated Coconut", "Black Chickpeas", "Onion", "Tomato", "Chilli Powder", "Turmeric", "Mustard Seeds", "Curry Leaves", "Coconut Oil", "Salt"],
        desc: "Classic Kerala breakfast combo."
    },
    {
        meal: "Idiyappam Stew",
        ingredients: ["Rice Flour", "Grated Coconut", "Coconut Milk", "Potato", "Carrot", "Beans", "Onion", "Green Chilli", "Ginger", "Curry Leaves", "Oil", "Salt"],
        desc: "String hoppers with mild vegetable stew."
    },
    {
        meal: "Egg Sandwich",
        ingredients: ["Bread", "Egg", "Onion", "Green Chilli", "Pepper", "Butter", "Salt"],
        desc: "Quick and easy egg sandwich."
    },
    {
        meal: "Vegetable Pulao",
        ingredients: ["Basmati Rice", "Carrot", "Beans", "Peas", "Onion", "Ginger", "Garlic", "Cinnamon", "Cloves", "Cardamom", "Bay Leaf", "Oil", "Salt"],
        desc: "Aromatic rice dish with mixed vegetables."
    },
    {
        meal: "Curd Rice",
        ingredients: ["Cooked Rice", "Curd", "Mustard Seeds", "Curry Leaves", "Green Chilli", "Ginger", "Salt"],
        desc: "Cooling rice dish with yogurt."
    },
    {
        meal: "Mixed Curry Bowl",
        ingredients: ["Cooked Rice", "Mixed Vegetables", "Chickpeas", "Onion", "Tomato", "Chilli Powder", "Turmeric", "Curry Leaves", "Coconut Oil", "Salt"],
        desc: "A mix of leftover curries and rice."
    },
    {
        meal: "Beef Porotta",
        ingredients: ["Maida", "Egg", "Oil", "Salt", "Beef", "Onion", "Ginger", "Garlic", "Chilli Powder", "Turmeric", "Garam Masala", "Curry Leaves"],
        desc: "Layered flatbread with spicy beef roast."
    },
    {
        meal: "Egg Dosa",
        ingredients: ["Dosa Batter", "Egg", "Onion", "Green Chilli", "Pepper", "Oil", "Salt"],
        desc: "Crispy dosa topped with an egg."
    }
];

const GROCERY_MAP = {
    "Puttu Kadala Combo": ["Rice flour", "Coconut", "Black chickpeas", "Onion", "Spices"],
    "Chicken Curry": ["Chicken", "Onion", "Tomato", "Ginger", "Garlic", "Spices", "Coconut oil"],
    "Sadhya (Average Plate)": ["Rice", "Dal", "Vegetables", "Coconut", "Curd", "Banana leaf"],
    "Appam": ["Rice flour", "Coconut milk", "Yeast", "Sugar"],
    "Stew (Vegetable)": ["Potato", "Carrot", "Beans", "Coconut milk", "Spices"],
    "Fish Curry": ["Fish", "Kodampuli (Pot Tamarind)", "Chili powder", "Curry leaves", "Coconut oil"],
    "Porotta": ["Maida", "Oil", "Salt", "Egg"],
    "Beef Fry": ["Beef", "Onion", "Spices", "Coconut slices", "Curry leaves"],
    "Idli": ["Rice", "Urad dal", "Salt"],
    "Dosa": ["Rice", "Urad dal", "Salt", "Oil"],
    "Masala Dosa": ["Rice", "Urad dal", "Potato", "Onion", "Spices"],
    "Idiyappam": ["Rice flour", "Salt", "Coconut"],
    "Egg Roast": ["Egg", "Onion", "Tomato", "Spices"],
    "Fish Fry": ["Fish", "Chili powder", "Turmeric", "Oil"],
    "Parippu Curry": ["Moong dal", "Coconut", "Cumin", "Garlic"],
    "Avial": ["Mixed Vegetables", "Coconut", "Curd", "Curry leaves"],
    "Thoran": ["Cabbage/Beans", "Coconut", "Mustard seeds", "Curry leaves"],
    "Sambar": ["Toor dal", "Vegetables", "Tamarind", "Sambar powder"],
    "Rasam": ["Tamarind", "Tomato", "Pepper", "Garlic"],
    "Curd": ["Milk", "Culture"],
    "Banana": ["Banana"],
    "Payasam": ["Milk/Coconut milk", "Sugar/Jaggery", "Vermicelli/Ada", "Cashews"],
    "Vada": ["Urad dal", "Onion", "Green chili", "Oil"],
    "Pazham Pori": ["Banana", "Maida", "Sugar", "Oil"],
    "Tea (with sugar)": ["Tea powder", "Milk", "Sugar", "Water"],
    "Chappathi": ["Wheat flour", "Water", "Salt", "Oil"],
    "Upma": ["Rava (Semolina)", "Onion", "Mustard seeds", "Green chili"],
    "Chicken Fry": ["Chicken", "Chili powder", "Spices", "Oil"]
};


// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
    // Load Data
    const saved = localStorage.getItem(CONFIG.storageKey);
    if (saved) state = JSON.parse(saved);

    // UI Init
    initTheme();
    renderFoodOptions();
    renderIngredients();
    renderGroceryOptions();
    updateUI();

    // Key Listeners
    setupKeys();

    // Remove Loader
    setTimeout(() => {
        document.getElementById('loader').style.opacity = '0';
        setTimeout(() => document.getElementById('loader').style.display = 'none', 500);
    }, 1500);
});

// --- CORE FUNCTIONS ---

function updateUI() {
    // 1. Food Log
    const logContainer = document.getElementById('food-log');
    logContainer.innerHTML = '';
    let total = 0;

    state.consumed.forEach((item, idx) => {
        total += item.cal;
        const el = document.createElement('div');
        el.className = 'list-item';
        el.innerHTML = `
            <div>
                <span style="font-weight:500">${item.name}</span>
                <span class="cat-badge ${getCatClass(item.cat)}" style="margin-left:8px; font-size:0.7rem; padding:2px 6px; border-radius:4px;">${item.cat}</span>
                <span style="font-size:0.8rem; opacity:0.7; margin-left:8px">${item.cal} kcal</span>
            </div>
            <button class="remove-btn" onclick="removeItem(${idx})">&times; Delete</button>
        `;
        logContainer.appendChild(el);
    });

    // 2. Dashboard Stats
    document.getElementById('total-cals').innerText = total;
    const pct = Math.min((total / CONFIG.dailyGoal) * 100, 100);
    document.getElementById('cal-progress').style.width = `${pct}%`;

    // Suggestion
    const sug = document.getElementById('smart-suggestion');
    if (total > CONFIG.dailyGoal) sug.innerText = "⚠️ You've exceeded your goal. Try light visuals.";
    else if (total < CONFIG.dailyGoal * 0.5) sug.innerText = "📉 Energy low. Consider a heavy meal.";
    else sug.innerText = "✅ You're on track. Keep it balanced.";

    // 3. Water
    document.getElementById('water-count').innerText = state.water;
    document.getElementById('water-bar').style.width = `${(state.water / CONFIG.waterGoal) * 100}%`;

    // 4. Save
    saveData();
}

function getCatClass(category) {
    if (category === "Healthy") return "cat-healthy";
    if (category === "Fast Food") return "cat-fast-food";
    return "cat-neutral";
}

function saveData() {
    localStorage.setItem(CONFIG.storageKey, JSON.stringify(state));
}

// --- DASHBOARD ACTIONS ---

function addFood() {
    const input = document.getElementById('food-input');
    const name = input.value;
    // Find food case-insensitive
    const food = FOOD_DB.find(f => f.name.toLowerCase() === name.toLowerCase());

    if (food) {
        state.consumed.push(food);
        input.value = '';
        updateUI();
    } else {
        alert("Food not found in database. Try selecting from the list.");
    }
}

function removeItem(idx) {
    state.consumed.splice(idx, 1);
    updateUI();
}

function checkHealth() {
    const sugar = parseInt(document.getElementById('sugar').value);
    const cholesterol = parseInt(document.getElementById('cholesterol').value);
    const res = document.getElementById('health-status');

    if (isNaN(sugar) || isNaN(cholesterol)) {
        if (!document.getElementById('sugar').value || !document.getElementById('cholesterol').value) return;
        alert("Please enter valid numbers.");
        return;
    }

    res.classList.remove('hidden', 'status-good', 'status-caution', 'status-bad', 'status-green', 'status-yellow', 'status-red');

    let status = "Green";
    let message = "✅ You are doing great! Keep it up.";
    let colorClass = "status-green";

    if (sugar > 140 || cholesterol > 200) {
        status = "Red";
        message = "⚠️ Risk! High levels detected. Avoid high-sugar and fatty foods.";
        colorClass = "status-red";
    } else if (sugar < 70) {
        status = "Yellow";
        message = "⚠️ Low sugar detected. Have a balanced meal.";
        colorClass = "status-yellow";
    } else if ((sugar >= 70 && sugar <= 140) && cholesterol < 200) {
        status = "Green";
        message = "✅ All levels look Safe.";
        colorClass = "status-green";
    } else {
        status = "Yellow";
        message = "⚠️ Check ranges carefully.";
        colorClass = "status-yellow";
    }

    let totalCals = 0;
    if (state && state.consumed) {
        totalCals = state.consumed.reduce((sum, item) => sum + item.cal, 0);
    }
    if (totalCals > 2500 && status !== "Red") {
        status = "Yellow";
        message = "⚠️ Health stats normal, but high calorie intake today. Caution.";
        colorClass = "status-yellow";
    }

    res.classList.add(colorClass);
    res.innerHTML = `<strong>Health Status: ${status}</strong><br>${message}`;
    res.classList.remove('hidden');
}

// --- LEFTOVER MODULE ---

function renderIngredients() {
    const grid = document.getElementById('ingredient-grid');
    grid.innerHTML = '';
    const allIng = new Set();
    RECIPES.forEach(r => r.ingredients.forEach(i => allIng.add(i)));

    Array.from(allIng).sort().forEach(ing => {
        const div = document.createElement('div');
        div.className = 'select-card';
        div.innerHTML = `<input type="checkbox" value="${ing}"> ${ing}`;
        grid.appendChild(div);
    });
}

function findMeal() {
    const checkboxes = document.querySelectorAll('#ingredient-grid input:checked');
    const selectedIngredients = Array.from(checkboxes).map(cb => cb.value);
    const res = document.getElementById('recipe-result');

    res.classList.remove('hidden', 'status-good', 'status-bad', 'status-caution');

    if (selectedIngredients.length === 0) {
        res.innerHTML = "Please select at least one ingredient.";
        res.classList.add('status-bad');
        res.classList.remove('hidden');
        return;
    }

    let foundMeal = null;
    let foundDesc = "";

    for (const item of RECIPES) {
        const required = item.ingredients;
        const hasAll = required.every(req => selectedIngredients.includes(req));

        if (hasAll) {
            foundMeal = item.meal;
            foundDesc = item.desc || "A delicious meal.";
            break;
        }
    }

    if (foundMeal) {
        res.classList.add('status-good');
        res.innerHTML = `
            <strong>💡 Suggested Meal: ${foundMeal}</strong><br>${foundDesc}
        `;
    } else {
        res.classList.add('status-caution');
        res.innerHTML = "😕 No exact match found. Try adding more ingredients to complete a recipe.";
    }
    res.classList.remove('hidden');
}


// --- GROCERY MODULE ---
function renderGroceryOptions() {
    const grid = document.getElementById('meal-grid');
    grid.innerHTML = '';
    Object.keys(GROCERY_MAP).forEach(m => {
        const div = document.createElement('div');
        div.className = 'select-card';
        div.innerHTML = `<input type="checkbox" value="${m}"> ${m}`;
        grid.appendChild(div);
    });
}

function generateGrocery() {
    const checked = Array.from(document.querySelectorAll('#meal-grid input:checked')).map(c => c.value);
    const list = document.getElementById('shopping-list');
    list.innerHTML = '';

    if (checked.length === 0) {
        list.innerHTML = '<li class="text-muted" style="text-align:center; padding:20px">No meals selected</li>';
        return;
    }

    const consolidatedIngredients = new Set();
    let fastFoodCount = 0;

    checked.forEach(meal => {
        if (GROCERY_MAP[meal]) {
            GROCERY_MAP[meal].forEach(i => consolidatedIngredients.add(i));
        }

        const foodInfo = FOOD_DB.find(f => f.name === meal);
        if (foodInfo && (foodInfo.cat === "Fast Food" || foodInfo.cat === "Unhealthy")) {
            fastFoodCount++;
        }
        if (!foodInfo) {
            if (meal.includes("Fry") || meal.includes("Porotta") || meal.includes("Pizza")) {
                fastFoodCount++;
            }
        }
    });

    consolidatedIngredients.forEach(i => {
        const li = document.createElement('li');
        li.className = 'list-item';
        li.innerText = i;
        list.appendChild(li);
    });

    if (fastFoodCount > 2) {
        const warn = document.createElement('div');
        warn.className = 'status-red';
        warn.style.marginTop = '16px';
        warn.style.padding = '16px';
        warn.style.borderRadius = '12px';
        warn.innerHTML = `<strong>⚠️ Health Warning:</strong> Your grocery list contains multiple high-calorie/fast food meals. Consider adding more veggies!`;
        list.appendChild(warn);
    }
}

// --- TOOLS ---
function updateWater(n) {
    state.water = Math.max(0, state.water + n);
    updateUI();
}

// --- BMI LOGIC v2 (Premium) ---
function calcBMI() {
    const hInput = parseFloat(document.getElementById('bmi-h').value);
    const wInput = parseFloat(document.getElementById('bmi-w').value);
    const resBox = document.getElementById('bmi-res');

    if (!hInput || !wInput) {
        alert("Please enter valid height and weight.");
        return;
    }

    const hM = hInput / 100;
    const bmi = (wInput / (hM * hM)).toFixed(1);

    let category = "";
    let message = "";
    let colorClass = "";
    let width = "0%";
    let marker = "0%";

    // WHO Classification
    if (bmi < 18.5) {
        category = "Underweight";
        message = "Your BMI is below the healthy range. Ensure adequate nutrition.";
        colorClass = "text-blue";
        width = "25%"; // Visual meter position
        marker = "12.5%";
    } else if (bmi < 25) {
        category = "Normal Weight";
        message = "Your BMI is within the healthy range. Maintain your balanced lifestyle.";
        colorClass = "text-green";
        width = "50%";
        marker = "37.5%";
    } else if (bmi < 30) {
        category = "Overweight";
        message = "Your BMI is slightly above the recommended range. Consider balanced calorie intake.";
        colorClass = "text-amber";
        width = "75%";
        marker = "62.5%";
    } else {
        category = "Obese";
        message = "Your BMI indicates a high range. Consider consulting a healthcare professional.";
        colorClass = "text-red";
        width = "100%";
        marker = "87.5%";
    }

    // Render Premium Card
    resBox.innerHTML = `
        <div class="bmi-card-content">
            <h4 class="bmi-title">BMI RESULT</h4>
            <div class="bmi-value-large ${colorClass}">${bmi}</div>
            <div class="bmi-category ${colorClass}">${category}</div>
            <p class="bmi-message">${message}</p>
            
            <div class="bmi-meter-container">
                <div class="bmi-meter-track">
                    <div class="bmi-meter-segment seg-blue"></div>
                    <div class="bmi-meter-segment seg-green"></div>
                    <div class="bmi-meter-segment seg-amber"></div>
                    <div class="bmi-meter-segment seg-red"></div>
                </div>
                <div class="bmi-marker" style="left: ${Math.min(Math.max((bmi / 40) * 100, 5), 95)}%"></div>
                <div class="bmi-labels">
                    <span>Under</span><span>Normal</span><span>Over</span><span>Obese</span>
                </div>
            </div>
        </div>
    `;

    resBox.classList.remove('hidden');
    resBox.classList.add('fade-in-up');
}

// --- UTILS ---
function switchTab(id) {
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));

    document.getElementById(id).classList.add('active');
    if (event && event.target) {
        event.target.classList.add('active');
    }
}

function initTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    updateThemeIcon();

    document.getElementById('theme-toggle').addEventListener('click', () => {
        state.theme = state.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', state.theme);
        updateThemeIcon();
        saveData();
    });
}

function updateThemeIcon() {
    const btn = document.getElementById('theme-toggle');
    if (state.theme === 'dark') {
        btn.innerHTML = `<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`;
    } else {
        btn.innerHTML = `<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`;
    }
}

function renderFoodOptions() {
    const dl = document.getElementById('food-options');
    dl.innerHTML = '';
    FOOD_DB.sort((a, b) => a.name.localeCompare(b.name)).forEach(f => {
        const op = document.createElement('option');
        op.value = f.name;
        dl.appendChild(op);
    });
}

function setupKeys() {
    const triggers = [
        { id: 'food-input', fn: addFood },
        { id: 'bmi-w', fn: calcBMI },
        { id: 'cholesterol', fn: checkHealth }
    ];

    triggers.forEach(t => {
        const el = document.getElementById(t.id);
        if (el) {
            el.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') t.fn();
            });
        }
    });
}

function showModal(title) {
    const m = document.getElementById('modal');
    document.getElementById('modal-title').innerText = title;
    const r = RECIPES.find(x => x.meal === title) || { ingredients: [], desc: "No details." };

    document.getElementById('modal-content').innerHTML = `
        <p>${r.desc}</p>
        <h4 style="margin-top:16px">Ingredients</h4>
        <ul style="padding-left:20px; margin-top:8px">
            ${r.ingredients.map(i => `<li>${i}</li>`).join('')}
        </ul>
    `;
    m.classList.add('open');
}

function closeModal() {
    document.getElementById('modal').classList.remove('open');
}
