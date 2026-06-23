const characters = [
  {
    name: "Jimmy Kudo / Conan Edogawa",
    affiliation: "High School Detective",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/6/6b/Jimmy_Kudo_Profile.png",
    firstAppearance: "Episode 1",
    status: "Alive",
    overview: "A world-famous teenage detective whose body was shrunk by APTX 4869.",
    details: "After being poisoned by the Black Organization, Jimmy continues solving cases as Conan Edogawa while secretly hunting the syndicate responsible."
  },
  {
    name: "Gin",
    affiliation: "Black Organization",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/3/3a/Gin_Profile.png",
    firstAppearance: "Episode 1",
    status: "Alive",
    codename: "Gin",
    role: "Senior Operative",
    overview: "A cold and ruthless high-ranking member of the Black Organization.",
    details: "Gin personally administered APTX 4869 to Jimmy Kudo and is feared even within the organization."
  },
  {
    name: "Vodka",
    affiliation: "Black Organization",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/9/9b/Vodka_Profile.png",
    firstAppearance: "Episode 1",
    status: "Alive",
    codename: "Vodka",
    role: "Operative",
    overview: "Gin’s longtime partner and subordinate.",
    details: "Vodka handles logistics, surveillance, and support tasks."
  },
  {
    name: "Vermouth",
    affiliation: "Black Organization",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/4/4c/Vermouth_Profile.png",
    firstAppearance: "Episode 176",
    status: "Alive",
    codename: "Vermouth",
    role: "Special Operative",
    overview: "A secretive and highly skilled member of the organization.",
    details: "She knows Conan’s true identity and has a unique connection to the Boss."
  },
  {
    name: "Kir",
    affiliation: "Black Organization / CIA",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/1/1d/Kir_Profile.png",
    firstAppearance: "Episode 425",
    status: "Alive",
    codename: "Kir",
    role: "Double Agent",
    overview: "A Black Organization member secretly working for the CIA.",
    details: "Her real name is Hidemi Hondou, operating under the alias Rena Mizunashi."
  },
  {
    name: "Chianti",
    affiliation: "Black Organization",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/8/84/Chianti_Profile.png",
    firstAppearance: "Episode 345",
    status: "Alive",
    codename: "Chianti",
    role: "Sniper",
    overview: "A short-tempered sniper.",
    details: "She harbors deep hatred toward Vermouth."
  },
  {
    name: "Korn",
    affiliation: "Black Organization",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/f/f4/Korn_Profile.png",
    firstAppearance: "Episode 345",
    status: "Alive",
    codename: "Korn",
    role: "Sniper",
    overview: "A silent and emotionless sniper.",
    details: "Works alongside Chianti with extreme precision."
  },
  {
    name: "Bourbon",
    affiliation: "Black Organization / Public Security Bureau",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/6/69/Bourbon_Profile.png",
    firstAppearance: "Episode 667",
    status: "Alive",
    codename: "Bourbon",
    role: "Infiltrator",
    overview: "An operative secretly working for Japanese intelligence.",
    details: "His real name is Rei Furuya."
  },
  {
    name: "Shuichi Akai / Subaru Okiya / Rye",
    affiliation: "FBI",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/5/5f/Shuichi_Akai_Profile.png",
    firstAppearance: "Episode 230",
    status: "Alive",
    codename: "Rye",
    role: "Undercover Agent",
    overview: "An FBI agent who infiltrated the Black Organization.",
    details: "His real name is Shuichi Akai, and his death was faked."
  },
  {
    name: "Rum",
    affiliation: "Black Organization",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/7/7a/Rum_Profile.png",
    firstAppearance: "Episode 783",
    status: "Alive",
    codename: "Rum",
    role: "Second-in-Command",
    overview: "The organization’s second-in-command.",
    details: "His true identity is Kanenori Wakita."
  },
  {
    name: "The Boss",
    affiliation: "Black Organization",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/d/d4/Renya_Karasuma.png",
    firstAppearance: "Episode 219",
    status: "Alive",
    codename: "Unknown",
    role: "Leader",
    overview: "The elusive leader of the Black Organization.",
    details: "His real name is Renya Karasuma."
  },
  {
    name: "Tequila",
    affiliation: "Black Organization",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/6/6a/Tequila_Profile.png",
    firstAppearance: "Episode 54",
    status: "Deceased",
    codename: "Tequila",
    role: "Operative",
    overview: "A large and intimidating operative.",
    details: "Killed by a bomb explosion intended for another target."
  },
  {
    name: "Calvados",
    affiliation: "Black Organization",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/0/02/Calvados_Profile.png",
    firstAppearance: "Episode 345",
    status: "Deceased",
    codename: "Calvados",
    role: "Sniper",
    overview: "A sniper who worked under Vermouth.",
    details: "His obsession with Vermouth led to his death."
  },
  {
    name: "Irish",
    affiliation: "Black Organization",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/7/7e/Irish_Profile.png",
    firstAppearance: "Movie 13: The Raven Chaser",
    status: "Deceased",
    codename: "Irish",
    role: "Enforcer",
    overview: "A powerful member featured in a theatrical film.",
    details: "Discovered Conan’s identity and was killed by Gin."
  },
  {
    name: "Scotch / Hiromitsu Morofushi",
    affiliation: "Black Organization / Public Security Bureau",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/9/9a/Scotch_Profile.png",
    firstAppearance: "Episode 866",
    status: "Deceased",
    codename: "Scotch",
    role: "Undercover Agent",
    overview: "A Japanese undercover agent.",
    details: "Died while protecting his cover after being exposed."
  },
  {
    name: "Pisco",
    affiliation: "Black Organization",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/a/a2/Pisco_Profile.png",
    firstAppearance: "Episode 129",
    status: "Deceased",
    codename: "Pisco",
    role: "Executive / Scientific Backer",
    overview: "An executive-level member and powerful businessman.",
    details: "Executed by Gin on the Boss’s orders."
  },
  {
    name: "Misao Yamamura",
    affiliation: "Gunma Prefectural Police",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/2/2f/Yamamura_Profile.png",
    firstAppearance: "Episode 96",
    status: "Alive",
    role: "Inspector",
    overview: "A persistent yet incompetent inspector.",
    details: "Often involved in cases with Conan."
  },
  {
    name: "Taka’aki Morofushi",
    affiliation: "Nagano Prefectural Police",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/0/0d/Takaaki_Morofushi_Profile.png",
    firstAppearance: "Episode 516",
    status: "Alive",
    role: "Inspector",
    overview: "A sharp and intelligent Nagano inspector.",
    details: "Frequently works with Kansuke Yamato."
  },
  {
    name: "Harley Hartwell",
    affiliation: "Civilian Detective",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/b/b2/Heiji_Hattori_Profile.png",
    firstAppearance: "Episode 48",
    status: "Alive",
    role: "High School Detective",
    overview: "A renowned detective from Osaka.",
    details: "Jimmy Kudo’s rival and trusted ally."
  },
  {
    name: "Anita Hailey",
    affiliation: "Junior Detective League",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/8/8c/Ai_Haibara_Profile.png",
    firstAppearance: "Episode 129",
    status: "Alive",
    role: "Former Black Organization Scientist",
    overview: "A former Black Organization scientist de-aged by APTX 4869.",
    details: "Formerly known as Sherry, Anita now lives under Dr. Agasa’s protection."
  },
  {
    name: "George Kojima",
    affiliation: "Junior Detective League",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/5/5c/Genta_Kojima_Profile.png",
    firstAppearance: "Episode 1",
    status: "Alive",
    role: "Member",
    overview: "An energetic and optimistic member of the Junior Detective League.",
    details: "Often provides comic relief and unexpected intuition."
  },
  {
    name: "Mitch Tsuburaya",
    affiliation: "Junior Detective League",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/1/1d/Mitsuhiko_Tsuburaya_Profile.png",
    firstAppearance: "Episode 1",
    status: "Alive",
    role: "Member",
    overview: "An intelligent and cautious member of the Junior Detective League.",
    details: "Relies on logic and knowledge during investigations."
  },
  {
    name: "Amy Yoshida",
    affiliation: "Junior Detective League",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/3/3c/Ayumi_Yoshida_Profile.png",
    firstAppearance: "Episode 1",
    status: "Alive",
    role: "Member",
    overview: "A kind-hearted and empathetic child detective.",
    details: "Often senses danger before others."
  },
  {
    name: "Rachel Moore",
    affiliation: "Civilian",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/4/4a/Ran_Mouri_Profile.png",
    firstAppearance: "Episode 1",
    status: "Alive",
    role: "Student / Karate Practitioner",
    overview: "Jimmy Kudo’s childhood friend and romantic interest.",
    details: "Highly skilled in karate and frequently caught in dangerous situations."
  },
  {
    name: "Richard Moore",
    affiliation: "Private Detective",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/2/2b/Kogoro_Mouri_Profile.png",
    firstAppearance: "Episode 1",
    status: "Alive",
    role: "Private Investigator",
    overview: "A private detective and Rachel’s father.",
    details: "Known as the \"Sleeping Detective\" due to Jimmy’s deductions."
  },
  {
    name: "Dr. Herschel Agasa",
    affiliation: "Civilian",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/0/0e/Hiroshi_Agasa_Profile.png",
    firstAppearance: "Episode 1",
    status: "Alive",
    role: "Inventor",
    overview: "An eccentric inventor and ally to Jimmy Kudo.",
    details: "Creates gadgets that help Jimmy solve cases discreetly."
  },
  {
    name: "Sonoko Suzuki",
    affiliation: "Civilian",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/8/86/Sonoko_Suzuki_Profile.png",
    firstAppearance: "Episode 6",
    status: "Alive",
    role: "Student / Heiress",
    overview: "Rachel Moore’s outspoken best friend.",
    details: "Often becomes involved in murder cases unintentionally."
  },
  {
    name: "Joseph Meguire",
    affiliation: "Tokyo Metropolitan Police",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/7/73/Juzo_Megure_Profile.png",
    firstAppearance: "Episode 1",
    status: "Alive",
    role: "Inspector",
    overview: "A veteran homicide inspector.",
    details: "Highly experienced and fair-minded."
  },
  {
    name: "Wataru Takagi",
    affiliation: "Tokyo Metropolitan Police",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/5/58/Wataru_Takagi_Profile.png",
    firstAppearance: "Episode 1",
    status: "Alive",
    role: "Detective",
    overview: "A kind-hearted and earnest detective.",
    details: "Works closely with Conan and is romantically involved with Miwako Sato."
  },
  {
    name: "Miwako Sato",
    affiliation: "Tokyo Metropolitan Police",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/d/d7/Miwako_Sato_Profile.png",
    firstAppearance: "Episode 146",
    status: "Alive",
    role: "Detective",
    overview: "A highly skilled and respected MPD officer.",
    details: "Known for sharp instincts and a strong sense of justice."
  },
  {
    name: "Kazunobu Chiba",
    affiliation: "Tokyo Metropolitan Police",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/6/63/Kazunobu_Chiba_Profile.png",
    firstAppearance: "Episode 138",
    status: "Alive",
    role: "Detective",
    overview: "A gentle and soft-spoken detective.",
    details: "Later becomes romantically involved with Naeko Miike."
  },
  {
    name: "Yumi Miyamoto",
    affiliation: "Tokyo Metropolitan Police",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/4/47/Yumi_Miyamoto_Profile.png",
    firstAppearance: "Episode 146",
    status: "Alive",
    role: "Traffic Division Officer",
    overview: "An outspoken and energetic traffic officer.",
    details: "In a relationship with shogi player Shukichi Haneda."
  },
  {
    name: "Kenji Hagiwara",
    affiliation: "Former Tokyo Metropolitan Police",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/e/e7/Kenji_Hagiwara_Profile.png",
    firstAppearance: "Episode 304",
    status: "Deceased",
    role: "Bomb Disposal Officer",
    overview: "A former MPD bomb disposal expert.",
    details: "Killed in the line of duty."
  },
  {
    name: "Jinpei Matsuda",
    affiliation: "Former Tokyo Metropolitan Police",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/2/28/Jinpei_Matsuda_Profile.png",
    firstAppearance: "Episode 304",
    status: "Deceased",
    role: "Bomb Disposal Officer",
    overview: "A rebellious but skilled officer.",
    details: "Sacrificed his life to stop a bomb."
  },
  {
    name: "Naeko Miike",
    affiliation: "Tokyo Metropolitan Police",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/9/9c/Naeko_Miike_Profile.png",
    firstAppearance: "Episode 681",
    status: "Alive",
    role: "Detective",
    overview: "A calm and capable MPD detective.",
    details: "Childhood friend of Kazunobu Chiba."
  },
  {
    name: "Kazuha Toyama",
    affiliation: "Civilian",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/6/66/Kazuha_Toyama_Profile.png",
    firstAppearance: "Episode 48",
    status: "Alive",
    role: "High School Student",
    overview: "Harley Hartwell’s childhood friend.",
    details: "A talented martial artist who often assists in investigations."
  },
  {
    name: "Martin Hartwell",
    affiliation: "Osaka Prefectural Police",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/3/3f/Heizo_Hattori_Profile.png",
    firstAppearance: "Episode 48",
    status: "Alive",
    role: "Inspector",
    overview: "Harley Hartwell’s father and a respected Osaka inspector.",
    details: "Supports major investigations in Kansai."
  },
  {
    name: "Ginshiro Toyama",
    affiliation: "Osaka Prefectural Police",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/8/8e/Ginshiro_Toyama_Profile.png",
    firstAppearance: "Episode 48",
    status: "Alive",
    role: "Inspector",
    overview: "Kazuha Toyama’s father and a skilled inspector.",
    details: "Occasionally coordinates with other prefectural police."
  },
  {
    name: "Kansuke Yamato",
    affiliation: "Nagano Prefectural Police",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/4/41/Kansuke_Yamato_Profile.png",
    firstAppearance: "Episode 125",
    status: "Alive",
    role: "Chief Inspector",
    overview: "A respected and sharp Nagano chief inspector.",
    details: "Known for calm demeanor and strong intuition."
  },
  {
    name: "Yui Uehara",
    affiliation: "Nagano Prefectural Police",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/9/9a/Yui_Uehara_Profile.png",
    firstAppearance: "Episode 125",
    status: "Alive",
    role: "Detective",
    overview: "An energetic and capable Nagano detective.",
    details: "Frequently leads investigations under Yamato."
  },
  {
    name: "Nicholas Santos",
    affiliation: "Tokyo Metropolitan Police",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/5/55/MPD_Officer_Profile.png",
    firstAppearance: "Episode 146",
    status: "Alive",
    role: "Detective Inspector",
    overview: "An elite Detective Inspector with the Tokyo Metropolitan Police.",
    details: "Coming from a wealthy and influential family, Santos initially appears arrogant but proves himself to be a capable and dedicated investigator. He is in a relationship with Sumiko Kobayashi."
  },
  {
    name: "Eisuke Hondo",
    affiliation: "Civilian",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/7/7a/Eisuke_Hondo_Profile.png",
    firstAppearance: "Episode 425",
    status: "Alive",
    role: "Amateur Detective",
    overview: "A perceptive high school student with strong reasoning skills.",
    details: "Despite initially appearing clumsy, Eisuke becomes deeply involved in the Black Organization case surrounding Kir and later moves to the United States."
  },
  {
    name: "Masumi Sera",
    affiliation: "Civilian Detective",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/3/35/Masumi_Sera_Profile.png",
    firstAppearance: "Episode 646",
    status: "Alive",
    role: "High School Detective",
    overview: "A sharp-tongued and highly intelligent high school detective.",
    details: "Known for her observational skills and quick deductions, she quickly notices Conan’s unusual intelligence."
  },
  {
    name: "Shukichi Haneda",
    affiliation: "Civilian",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/2/27/Shukichi_Haneda_Profile.png",
    firstAppearance: "Episode 731",
    status: "Alive",
    role: "Professional Shogi Player",
    overview: "A nationally famous shogi player known as \"Master Taiko.\"",
    details: "He is Yumi Miyamoto’s romantic partner and the younger brother of Shuichi Akai."
  },
  {
    name: "Sumiko Kobayashi",
    affiliation: "Civilian",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/6/63/Sumiko_Kobayashi_Profile.png",
    firstAppearance: "Episode 112",
    status: "Alive",
    role: "Elementary School Teacher",
    overview: "The homeroom teacher of the Junior Detective League.",
    details: "She is kind, patient, and deeply cares for her students. She is romantically involved with Detective Santos."
  },
  {
    name: "Kaito Kuroba",
    alias: "Phantom Thief Kid",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/6/63/Kaito_Kuroba_Profile.png",
    affiliation: "Phantom Thief",
    status: "Alive",
    role: "Master Thief / Magician",
    firstAppearance: "Episode 76",
    overview: "Kaito Kuroba is the legendary phantom thief known as Phantom Thief Kid.",
    details: "Disguised as the internationally infamous gentleman thief, Kaito uses elaborate tricks, disguises, and stage magic to steal valuable jewels while evading capture. Despite his criminal persona, he rarely harms others and often clashes intellectually with Conan."
  },
  {
    name: "Ginzo Nakamori",
    image: "https://static.wikia.nocookie.net/detectiveconan/images/6/63/Ginzo_Nakamori_Profile.png",
    affiliation: "Tokyo Metropolitan Police",
    status: "Alive",
    role: "Fraud and Theft Investigation Inspector",
    firstAppearance: "Episode 76",
    overview: "Inspector Ginzo Nakamori is the police inspector obsessed with capturing Phantom Thief Kid.",
    details: "Nakamori has spent years pursuing Kaito Kid but continually falls victim to the thief’s elaborate tricks and disguises. Despite his frustration and comedic tendencies, he is a determined and experienced investigator."
  }
];


const search = document.getElementById("search");
const results = document.getElementById("results");
const content = document.getElementById("content");

search.addEventListener("input", () => {
  const query = search.value.toLowerCase().trim();
  results.innerHTML = "";

  if (!query) {
    results.classList.add("d-none");
    return;
  }

  const matches = characters.filter(c =>
    c.name.toLowerCase().includes(query)
  );

  matches.forEach(character => {
    const div = document.createElement("div");
    div.textContent = character.name;
    div.onclick = () => renderCharacter(character);
    results.appendChild(div);
  });

  results.classList.remove("d-none");
});

function renderCharacter(c) {
  results.classList.add("d-none");
  search.value = c.name;

  content.innerHTML = `
    <div class="row">
      <div class="col-md-4">
        <div class="border rounded p-3 bg-light text-center">
          <img src="${c.image}" class="img-fluid rounded mb-3" />
          <h4>${c.name}</h4>
          <p><strong>Affiliation:</strong><br>${c.affiliation}</p>
          <p><strong>Status:</strong><br>${c.status}</p>
          <p><strong>First Appearance:</strong><br>${c.firstAppearance}</p>
        </div>
      </div>

      <div class="col-md-8 text-start">
        <h3>Overview</h3>
        <p>${c.overview}</p>

        <h4>Details</h4>
        <p>${c.details}</p>
      </div>
    </div>
  `;
}