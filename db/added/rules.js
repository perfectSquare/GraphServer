export const rules = [
    {
        "id": 1,
        "rules": [
            {"logo": "intime", "about": "Check-in: After 3:00 PM", "more": ""},
            {"logo": "pets-steps", "about": "Pets are allowed", "more": ""}
        ],        
        "additional": ["Matvaror som finns får användas", "Katt ej tillåten på grund av allergi, andra pälsdjur ok"]      
    },
    {
        "id": 2,
        "rules": [
            {"logo": "intime", "about": "Check-in: After 3:00 PM", "more": ""},
            {"logo": "outTime", "about": "Checkout: 12:00 PM", "more": ""},
            {"logo": "self-check-in", "about": "Self check-in with smart lock", "more": ""},
            {"logo": "infantNot", "about": "Not suitable for infants (under 2 years)", "more": "not"},
            {"logo": "smokingNot", "about": "No smoking", "more": "not"},
            {"logo": "baloonNot", "about": "No parties or events", "more": "not"},
            {"logo": "pets-steps", "about": "Pets are allowed", "more": ""}
        ],  
        "safety": [
            {"logo": "note", "about": "Security camera/recording device", "more": ""},
            {"logo": "note", "about": "Nearby lake, river, other body of water", "more": ""},
            {"logo": "good", "about": "Carbon monoxide detector not required", "more": ""},
            {"logo": "smoke-alarm", "about": "Smoke alarm", "more": ""}
        ],  
        "additional": ["Matvaror som finns får användas", "Katt ej tillåten på grund av allergi, andra pälsdjur ok"],
        "cancel":[
            {"about": "48 hours", "policy": "Full refund: Get back 100% of what you paid.", "on": true, "days": 0},
            {"about": "partial", "policy": "Partial refund: Get back 50% of every night. No refund of the service fee.", "on": true, "days": 7},
            {"about": "checkIn", "policy": "No refund", "on": true, "days": 0}
        ]
    },
    {
        "id": 3,
        "rules": [
            {"logo": "intime", "about": "Check-in: 3:00 PM - 8:00 PM", "more": ""},
            {"logo": "outTime", "about": "Checkout: 12:00 PM", "more": "0"},
            {"logo": "self-check-in", "about": "Self check-in with lockbox", "more": ""},
            {"logo": "smokingNot", "about": "No smoking", "more": "not"},
            {"logo": "pets-steps", "about": "Pets are allowed", "more": ""}
        ],  
        "safety": [
            {"logo": "note", "about": "Pool/hot tub without a gate or lock", "more": ""},
            {"logo": "note", "about": "Nearby lake, river, other body of water", "more": ""},
            {"logo": "CO", "about": "Carbon monoxide alarm", "more": ""},
            {"logo": "smoke-alarm", "about": "Smoke alarm", "more": ""}
        ],  
        "additional": [],
        "cancel":[            
            {"about": "checkIn", "policy": "No refund", "on": true, "days": 0}
        ]
    },
    {
        "id": 4,
        "rules": [
            {"logo": "intime", "about": "Check-in: After 2:00 PM", "more": ""},
            {"logo": "outTime", "about": "Checkout: 10:00 AM", "more": "0"},
            {"logo": "baloonNot", "about": "No parties or events", "more": "not"},
            {"logo": "smokingNot", "about": "No smoking", "more": "not"},
            {"logo": "pets-steps", "about": "Pets are allowed", "more": ""}
        ],  
        "safety": [
            {"logo": "ques", "about": "Carbon monoxide alarm not reported", "more": ""},
            {"logo": "ques", "about": "Smoke alarm not reported", "more": ""}
        ],  
        "additional": ["Price includes:<br>Transfer from Vis island to the Villa on arrival<br>Transfer from the Villa to Vis island on departure<br>Transfer from the Villa to Vis island on request<br>Villa manager<br>Welcome package<br>Change of towels upon request<br>Change of bed linen upon request<br>Baby cot<br>First cleaning<br>Final cleaning<br>Wi – Fi<br><br>Obligations:<br>Check-in: 14:00<br>Check-out: 10:00<br><br>Additional amenities on request - surcharge:<br>Speedboat with a skipper<br>Airport transfer<br><br>Private chef<br>Nanny<br>Personal trainer<br>Yoga instructor<br>Diving"],
        "cancel":[            
            {"about": "checkIn", "policy": "No refund", "on": true, "days": 0}
        ]
    },
    {
        "id": 5,
        "rules": [
            {"logo": "intime", "about": "Check-in: Flexible", "more": ""},
            {"logo": "infantNot", "about": "Not suitable for infants (under 2 years)", "more": ""},
            {"logo": "baloonNot", "about": "No parties or events", "more": "npt"},
            {"logo": "smokingNot", "about": "No smoking", "more": "not"},
            {"logo": "pets-steps", "about": "Pets are allowed", "more": ""}
        ],  
        "safety": [
            {"logo": "note", "about": "Security camera/recording device", "more": ""},
            {"logo": "note", "about": "Nearby lake, river, other body of water", "more": ""},
            {"logo": "note", "about": "May encounter potentially dangerous animal", "more": ""},
            {"logo": "CO", "about": "Carbon monoxide alarm", "more": ""}
        ],  
        "additional": ["Tupakointi sisätiloissa ehdottomasti kielletty.<br><br>Avotulen/nuotion teko kielletty.<br><br>240€ takuusumma palautetaan, kun kohde on siivottu asianmukaisesti ja tarkistettu myös, ettei mitään ole rikottu. Vuokraaja vastaa siivouksesta ja aiheuttamistaan vahingoista. Jos kohdetta ei ole siivottu tai jotakin on rikottu, maksu vähennetään takuusummasta.<br><br>Lisätiedot puhelimitse +35840-5783737."],
        "cancel":[            
            {"about": "checkIn", "policy": "No refund", "on": true, "days": 0}
        ]
    },
    {
        "id": 6,
        "rules": [
            {"logo": "intime", "about": "Check-in: After 3:00 PM", "more": ""},
            {"logo": "smokingNot", "about": "No smoking", "more": "not"},
            {"logo": "petsNot", "about": "No pets", "more": ""}
        ],  
        "safety": [
            {"logo": "ques", "about": "Carbon monoxide alarm not reported", "more": ""},
            {"logo": "ques", "about": "Smoke alarm not reported", "more": ""}
        ],  
        "additional": ["NO ALCOHOL ALLOWED!"],
        "cancel":[            
            {"about": "partial", "policy": "Full refund: Get back 100% of what you paid.", "on": true, "days": 5},
            {"about": "checkIn", "policy": "Partial refund: Get back 50% of every night but the first one. No refund of the first night or the service fee.", "on": true, "days": 0}
        ]
    }            

]