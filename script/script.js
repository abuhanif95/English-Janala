const loadLesson = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((response) => response.json())
    .then((json) => displayLesson(json.data));
};

const loadLevelWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  //   console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayLevelWord(data.data));
};

const displayLevelWord = (words) => {
  //   console.log(words);
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";

  if (words.length === 0) {
    wordContainer.innerHTML = `
       <div
        class="text-center col-span-full rounded-md py-10 space-y-6 font-bangla"
      >
        <img class="mx-auto" src="./assets/alert-error.png" alt="">
        <p class="text-xl font-medium text-gray-500">
          এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
        </p>
        <h2 class="font-bold text-4xl">নেক্সট Lesson এ যান</h2>
      </div>
    `;
    return;
  }

  words.forEach((word) => {
    // console.log(word);

    const card = document.createElement("div");
    card.innerHTML = `
       <div
        class="bg-white rounded-xl text-center shadow-sm py-10 px-5 space-y-3"
      >
        <h2 class="font-bold text-2xl">${word.word ? word.word : "Words not found"}</h2>
        <p class="font-semibold">Meaning/Pronunciation</p>
        <div class="text-2xl font-medium font-bangla">"${word.meaning ? word.meaning : "কোনো শব্দ পাওয়া যায়নি"} / ${word.pronunciation ? word.pronunciation : "Pronunciation not found"}"</div>
        <div class="flex justify-between items-center">
          <button class="btn btn-soft btn-info">
            <i class="fa-solid fa-circle-info"></i>
          </button>
          <button class="btn btn-soft btn-info">
            <i class="fa-solid fa-volume-high"></i>
          </button>
        </div>
      </div>
    `;
    wordContainer.append(card);
  });
};

const displayLesson = (lessons) => {
  // console.log(lessons);

  // get the container and empty
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";

  // get into every lessons
  for (let lesson of lessons) {
    // create Element
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
       <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
            <i class="fa-solid fa-book-open"></i> Lesson-${lesson.level_no}
        </button>
    `;

    // append into container
    levelContainer.append(btnDiv);
  }
};

loadLesson();
