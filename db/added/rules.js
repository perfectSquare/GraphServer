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
    },
    {
        "id": 7,
        "rules": [
            {"logo": "intime", "about": "Check-in: After 2:00 PM", "more": ""},
            {"logo": "outTime", "about": "Checkout: 10:00 AM", "more": "0"},
            {"logo": "baloonNot", "about": "No parties or events", "more": "not"},
            {"logo": "smokingNot", "about": "No smoking", "more": "not"},
            {"logo": "petsNot", "about": "No Pets", "more": ""}
        ],  
        "safety": [
            {"logo": "note", "about": "No carbon monoxide alarm", "more": ""},
            {"logo": "note", "about": "No smoke alarm", "more": ""},
            {"logo": "note", "about": "Pool/hot tub without a gate or lock", "more": ""},
            {"logo": "note", "about": "Nearby lake, river, other body of water", "more": ""}
        ],  
        "additional": ["- A- Normal electricity usage is covered in the rental price (up to 50 KWh / day). This is more than sufficient for normal usage. Unfortunately we have to charge excessive usage as electricity is scarce and by that very expensive in Sri Lanka. Every KWh over the daily 50 KWh will be charged with 100 SLR. At check-in and check-out the meter will be read. If there are additional costs they have to be settled before check-out. <br>- No subletting<br>- Maximum number of six, which include children<br>- Strictly no smoking inside Villa<br>- No Pets<br>- Pool facilities to be used at guests own risk<br>- Any damages must be reported to staff<br>- Extra WIFI usage will be charged forPlease Note: We hope to get your understanding for the fact that we only allow a maximum of 6 people as staying guests (including children). We have to be strict on this matter. So please do not book this Villa if you are intending to stay with more than 6 guests (including children). Thank you."],
        "cancel":[            
            {"about": "48 hours", "policy": "Full refund: Get back 100% of what you paid.", "on": true, "days": 0},
            {"about": "partial", "policy": "Partial refund: Get back 50% of every night. No refund of the service fee.", "on": true, "days": 7},
            {"about": "checkIn", "policy": "No refund", "on": true, "days": 0}
        ]
    },
    {
        "id": 8,
        "rules": [
            {"logo": "intime", "about": "Check-in: 3:00 PM - 8:00 PM", "more": ""},
            {"logo": "outTime", "about": "Checkout: 12:00 PM", "more": "0"},
            {"logo": "baloonNot", "about": "No parties or events", "more": ""},
            {"logo": "smoking", "about": "Smoking is allowed", "more": ""},
            {"logo": "petsNot", "about": "No pets", "more": ""}
        ],  
        "safety": [
            {"logo": "note", "about": "Pool/hot tub without a gate or lock", "more": ""},
            {"logo": "note", "about": "Nearby lake, river, other body of water", "more": ""},
            {"logo": "CO", "about": "Carbon monoxide alarm", "more": ""},
            {"logo": "smoke-alarm", "about": "Smoke alarm", "more": ""}
        ],  
        "additional": ["-ห้ามสูบบุหรี่ภายในห้องพัก แต่คุณสามารถสูบบุหรี่ภายนอกห้องพักได้<br>-งดใช้เสียงดังหลังเวลา 22.00 น."],
        "cancel":[            
            {"about": "partial", "policy": "Full refund: Get back 100% of what you paid.", "on": true, "days": 1},
            {"about": "checkIn", "policy": "No refund", "on": true, "days": 0}
        ]
    },
    {
        "id": 9,
        "rules": [
            {"logo": "intime", "about": "Check-in: 12:00 PM - 2:00 AM", "more": ""},
            {"logo": "infantNot", "about": "Not suitable for infants (under 2 years)", "more": ""},
            {"logo": "smokingNot", "about": "No smoking", "more": ""},
            {"logo": "petsNot", "about": "No pets", "more": ""}
        ],  
        "safety": [
            {"logo": "note", "about": "No smoke alarm", "more": ""},
            {"logo": "ques", "about": "Carbon monoxide alarm not reported", "more": ""}
       ],  
        "additional": [],
        "cancel":[            
            {"about": "partial", "policy": "Partial refund: Get back 50% of every night. No refund of the service fee.", "on": true, "days": 7},
            {"about": "checkIn", "policy": "No refund", "on": true, "days": 0}
        ]
    },    
    {
        "id": 10,
        "rules": [
            {"logo": "intime", "about": "Check-in: 3:00 PM - 10:00 PM", "more": ""},
            {"logo": "outTime", "about": "Checkout: 12:00 PM", "more": "0"},
            {"logo": "baloonNot", "about": "Not parties or events", "more": ""},
            {"logo": "smokingNot", "about": "No smoking", "more": ""},
            {"logo": "petsNot", "about": "No pets", "more": ""}
        ],  
        "safety": [
            {"logo": "note", "about": "No smoke alarm", "more": ""},
            {"logo": "note", "about": "No Carbon monoxide alarm", "more": ""}
       ],  
        "additional": ["1.Do the dishes! We provide washing liquid, sponges.<br>2.           No parties or events.<br>3.           No unregistered visitors other than those checked-in<br>4.           No smoking indoors. Smoke with a beautiful view in lawn!br>5.           Please switch off the lights, fan/heater, TV when leaving. <br>6.           Pets in Lawn only, they will love it!<br>7.           Save Water! We pump it all the way from underground!<br>8.           “Room/maid service” will NOT be provided during stay.<br>9.           Let us know about any spills/stains straight away.<br>10.  Do not litter the property, place trash in three bins provided.                                                                 <br>11.  Leave the bathroom clean.<br>12.  Extra pairs of clean bedding and towel are provided inside the unit.<br>13.  Keep dirty shoes out, soft slippers are provided for inside!<br>14.  In case of breakages. Just pay up for the broken item!"],
        "cancel":[            
            {"about": "partial", "policy": "Full refund: Get back 100% of what you paid.", "on": true, "days": 5},
            {"about": "checkIn", "policy": "No refund", "on": true, "days": 0}
        ]
    },    
    {
        "id": 11,
        "rules": [
            {"logo": "intime", "about": "Check-in: 2:00 PM - 6:00 PM", "more": ""},
            {"logo": "outTime", "about": "Checkout: 11:00 AM", "more": "0"},
            {"logo": "self-check-in", "about": "Self check-in with building staff", "more": "0"},
            {"logo": "baloonNot", "about": "Not parties or events", "more": ""},
            {"logo": "smokingNot", "about": "No smoking", "more": ""},
            {"logo": "petsNot", "about": "No pets", "more": ""}
        ],  
        "safety": [
            {"logo": "ques", "about": "Carbon monoxide alarm not reported", "more": ""},
            {"logo": "ques", "about": "Smoke alarm not reported", "more": ""}
       ],  
        "additional": ["- Not suitable for pets No parties or events Check-in is between 2PM and 6PM. Check-in outside this window can be arranged with advanced notice.<br>- Smoking is permitted outside the Villa"],
        "cancel":[            
            {"about": "partial", "policy": "Full refund: Get back 100% of what you paid.", "on": true, "days": 30},
            {"about": "partial", "policy": "Partial refund: Get back 50% of every night. No refund of the service fee.", "on": true, "days": 7},
            {"about": "checkIn", "policy": "No refund", "on": true, "days": 0}
        ]
    },        
    {
        "id": 12,
        "rules": [
            {"logo": "intime", "about": "Check-in: Flexible", "more": ""},
            {"logo": "outTime", "about": "Checkout: 12:00 PM", "more": "0"},
            {"logo": "infantNot", "about": "Not suitable for infants (under 2 years)", "more": "0"},
            {"logo": "baloonNot", "about": "Not parties or events", "more": ""},
            {"logo": "smokingNot", "about": "No smoking", "more": ""},
            {"logo": "petsNot", "about": "No pets", "more": ""}
        ],  
        "safety": [
            {"logo": "note", "about": "No Carbon monoxide alarm", "more": ""},
            {"logo": "note", "about": "No Smoke alarm", "more": ""}
       ],  
        "additional": [""],
        "cancel":[            
            {"about": "checkIn", "policy": "No refund", "on": true, "days": 0}
        ]
    },
    {
        "id": 13,
        "rules": [
            {"logo": "intime", "about": "Checkout: 12:00 PM", "more": ""},
            {"logo": "baloonNot", "about": "Not parties or events", "more": ""},
            {"logo": "smokingNot", "about": "No smoking", "more": ""},
            {"logo": "petsNot", "about": "No pets", "more": ""}
        ],  
        "safety": [
            {"logo": "note", "about": "No Carbon monoxide alarm", "more": ""},
            {"logo": "note", "about": "No Smoke alarm", "more": ""}
       ],  
        "additional": [""],
        "cancel":[            
            {"about": "checkIn", "policy": "No refund", "on": true, "days": 0}
        ]
    },
    {
        "id": 14,
        "rules": [
            {"logo": "intime", "about": "Checkin: 12:00 PM", "more": ""},
            {"logo": "outTime", "about": "Checkout: 10:00 AM", "more": ""},
            {"logo": "smoking", "about": "Smoking is allowed", "more": ""},
            {"logo": "petsNot", "about": "No pets", "more": ""}
        ],  
        "safety": [
            {"logo": "ques", "about": "Carbon monoxide alarm not reported", "more": ""},
            {"logo": "ques", "about": "Smoke alarm not reported", "more": ""}
       ],  
        "additional": ["All credit card holders must be aged 25 years and older at check-in.<br>Events upon request and at extra cost (max 20 guests)"],
        "cancel":[            
            
        ]
    },            
    {
        "id": 15,
        "rules": [
            {"logo": "intime", "about": "Check-in: After 3:00 PM", "more": ""},
            {"logo": "outTime", "about": "Checkout: 11:00 AM", "more": ""},
            {"logo": "smokingNot", "about": "No Smoking", "more": ""},
            {"logo": "petsNot", "about": "No pets", "more": ""}
        ],  
        "safety": [
            {"logo": "CO", "about": "Carbon monoxide alarm", "more": ""},
            {"logo": "smoke-alarm", "about": "Smoke alarm", "more": ""}
       ],  
        "additional": ["All credit card holders must be aged 25 years and older at check-in.<br>Additional bedding is available upon request and at additional cost."],
        "cancel":[            
            
        ]
    },            
    {
        "id": 16,
        "rules": [
            {"logo": "intime", "about": "Check-in: 2:00 PM - 6:00 PM", "more": ""},
            {"logo": "outTime", "about": "Checkout: 10:00 AM", "more": ""},
            {"logo": "self-check-in", "about": "Self check-in with building staff", "more": ""},
            {"logo": "infantNot", "about": "Not suitable for children and infants", "more": ""},
            {"logo": "smokingNot", "about": "No Smoking", "more": ""},
            {"logo": "petsNot", "about": "No pets", "more": ""},
            {"logo": "baloonNot", "about": "No parties or events", "more": ""}
        ],  
        "safety": [
            {"logo": "CO", "about": "Carbon monoxide alarm", "more": ""},
            {"logo": "smoke-alarm", "about": "Smoke alarm", "more": ""}
       ],  
        "additional": ["AAll credit card holders must be aged 25 years and older at check-in."],
        "cancel":[            
            {"about": "checkIn", "policy": "Refund of only the hospitality fee", "on": true, "days": 0}
        ]
    },            



]