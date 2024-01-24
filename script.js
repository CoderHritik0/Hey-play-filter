// Data Array of classes
let classInfo = [
  {
    OrgName: "Classcapades",
    className: "BRP - Building Readers Programme (Grade 1)",
    address: "Khar West, Mumbai",
    ageGroupStart: 60,
    ageGroupEnd: 84,
    days: ["Tue", "Thu", "Fri"],
    startDate: "Jun 13, 2023",
    endDate: "Jun 15, 2024",
    categories: ["Language", "Phonics"],
    classType: "Weekly",
    rating: 2,
    img: "1.jpg",
  },
  {
    OrgName: "The Lil Yogi's Club",
    className: "YOGA DISCO TODDLERS",
    address: "Colaba, Mumbai",
    ageGroupStart: 18,
    ageGroupEnd: 96,
    days: ["Tue", "Thu"],
    startDate: "Jun 13, 2023",
    endDate: "Jun 12, 2024",
    categories: ["Sports & Fitness"],
    classType: "Monthly",
    rating: 3,
    img: "2.jpg",
  },
  {
    OrgName: "Magic Beans",
    className: "Magic Beans : The Wonderful World of Jolly Phonics LEVEL 1",
    address: "Tardeo, Mumbai",
    ageGroupStart: 30,
    ageGroupEnd: 60,
    days: ["Mon", "Sat"],
    startDate: "Jun 12, 2023",
    endDate: "Jun 16, 2024",
    categories: ["Phonics"],
    classType: "Sessions",
    rating: 1,
    img: "3.jpg",
  },
  {
    OrgName: "Allrounder",
    className: "Aerial Silk",
    address: "Dadar, Mumbai",
    ageGroupStart: 48,
    ageGroupEnd: 216,
    days: ["Sat", "Sun"],
    startDate: "Jun 12, 2023",
    endDate: "Jun 12, 2024",
    categories: ["Sports & Fitness"],
    classType: "Monthly",
    rating: 5,
    img: "4.jpg",
  },
  {
    OrgName: "Magic Beans",
    className: "Magic Beans Mommy And Me",
    address: "Taedeo, Mumbai",
    ageGroupStart: 10,
    ageGroupEnd: 30,
    days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    startDate: "Jun 12, 2023",
    endDate: "Jun 19, 2024",
    categories: ["Parent Toddler"],
    classType: "Sessions",
    rating: 3,
    img: "5.jpg",
  },
  {
    OrgName: "The Yoga House Studio & Cafe",
    className: "SHADAJA - A MUSIC PROGRAMME IN BANDRA for Parents & Toddlers",
    address: "Bandra West, Mumbai",
    ageGroupStart: 6,
    ageGroupEnd: 32,
    days: ["Tue"],
    startDate: "Jul 4, 2023",
    endDate: "Jun 4, 2024",
    categories: ["Dance"],
    classType: "Course",
    rating: 4,
    img: "6.jpg",
  },
  {
    OrgName: "Magic Beans",
    className: "Magic Beans Sensory Play",
    address: "Tardeo, Mumbai",
    ageGroupStart: 12,
    ageGroupEnd: 72,
    days: ["Thu"],
    startDate: "Jun 15, 2023",
    endDate: "Jun 14, 2024",
    categories: ["Art & Sensory"],
    classType: "Monthly",
    rating: 4,
    img: "7.jpg",
  },
  {
    OrgName: "Magic Beans",
    className: "Magic Beans Yoga For Kids",
    address: "Tardeo, Mumbai",
    ageGroupStart: 36,
    ageGroupEnd: 72,
    days: ["Tue"],
    startDate: "Jun 13, 2023",
    endDate: "Jun 12, 2024",
    categories: ["Sports & Fitness"],
    classType: "Monthly",
    rating: 3,
    img: "8.jpg",
  },
  {
    OrgName: "Magic Beans",
    className: "Magic Beans - Parent Child RHYME & RHYTHM",
    address: "Tardeo, Mumbai",
    ageGroupStart: 18,
    ageGroupEnd: 60,
    days: ["Mon"],
    startDate: "Jun 12, 2023",
    endDate: "May 12, 2024",
    categories: ["Music"],
    classType: "Sessions",
    rating: 2,
    img: "9.jpg",
  },
  {
    OrgName: "Little Kickers",
    className: "Little Kickers Football",
    address: "Bandra West, Mumbai",
    ageGroupStart: 18,
    ageGroupEnd: 60,
    days: ["Tue", "Wed", "Thu", "Fri"],
    startDate: "Jun 1, 2023",
    endDate: "Jun 30, 2024",
    categories: ["Sports & Fitness"],
    classType: "Quarterly",
    rating: 2,
    img: "10.jpg",
  },
  {
    OrgName: "Little Gym Of Bandra",
    className: "Gymnastics Classes",
    address: "Bandra West, Mumbai",
    ageGroupStart: 19,
    ageGroupEnd: 72,
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    startDate: "Jun 1, 2023",
    endDate: "Jun 30, 2024",
    categories: ["Sports & Fitness"],
    classType: "Quarterly",
    rating: 4,
    img: "11.jpg",
  },
  {
    OrgName: "Little Kickers",
    className: "Little Kickers Football",
    address: "Juhu, Mumbai",
    ageGroupStart: 18,
    ageGroupEnd: 60,
    days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    startDate: "Jun 1, 2023",
    endDate: "Jun 30, 2024",
    categories: ["Sports & Fitness"],
    classType: "Quarterly",
    rating: 2,
    img: "12.jpg",
  },
  {
    OrgName: "Magic Beans",
    className: "Magic Beans BRAIN BOOSTERS",
    address: "Tardeo, Mumbai",
    ageGroupStart: 30,
    ageGroupEnd: 48,
    days: ["Mon", "Wed", "Fri"],
    startDate: "Jun 17, 2023",
    endDate: "Jul 16, 2024",
    categories: ["Language", "Phonics"],
    classType: "Monthly",
    rating: 5,
    img: "13.jpg",
  },
  {
    OrgName: "Allrounders",
    className: "Drawing Classes",
    address: "Dadar, Mumbai",
    ageGroupStart: 36,
    ageGroupEnd: 120,
    days: ["Fri", "Sat"],
    startDate: "Jul 1, 2023",
    endDate: "Jun 30, 2024",
    categories: ["Art & Sensory"],
    classType: "Monthly",
    rating: 3,
    img: "14.jpg",
  },
  {
    OrgName: "Allrounders",
    className: "Keyboard Classes",
    address: "Dadar, Mumbai",
    ageGroupStart: 78,
    ageGroupEnd: 168,
    days: ["Wed"],
    startDate: "Jul 1, 2023",
    endDate: "Jun 30, 2024",
    categories: ["Music"],
    classType: "Monthly",
    rating: 2,
    img: "15.jpg",
  },
  {
    OrgName: "Allrounders",
    className: "Ballet Class",
    address: "Dadar, Mumbai",
    ageGroupStart: 48,
    ageGroupEnd: 144,
    days: ["Tue"],
    startDate: "Jul 1, 2023",
    endDate: "Jun 30, 2024",
    categories: ["Dance"],
    classType: "Monthly",
    rating: 4,
    img: "16.jpg",
  },
  {
    OrgName: "Allrounders",
    className: "Taekwondo Class",
    address: "Dadar, Mumbai",
    ageGroupStart: 60,
    ageGroupEnd: 144,
    days: ["Sat"],
    startDate: "Jul 1, 2023",
    endDate: "Jun 30, 2024",
    categories: ["Sports & Fitness"],
    classType: "Monthly",
    rating: 3,
    img: "17.jpg",
  },
  {
    OrgName: "Allrounder",
    className: "Bollywood Dance Class",
    address: "Dadar, Mumbai",
    ageGroupStart: 96,
    ageGroupEnd: 108,
    days: ["Mon", "Thu"],
    startDate: "Jul 1, 2023",
    endDate: "Jun 30, 2024",
    categories: ["Dance"],
    classType: "Monthly",
    rating: 5,
    img: "18.jpg",
  },
  {
    OrgName: "Yoga With Anindita",
    className: "Yoga With Anindita",
    address: "Santacruz West, Mumbai",
    ageGroupStart: 36,
    ageGroupEnd: 84,
    days: ["Sun"],
    startDate: "Jul 1, 2023",
    endDate: "Jun 30, 2024",
    categories: ["Sports & Fitness"],
    classType: "Monthly",
    rating: 4,
    img: "19.jpg",
  },
  {
    OrgName: "Gehna Mirchandani",
    className: "Gehna's Jolly Classes",
    address: "Bandra West, Mumbai",
    ageGroupStart: 36,
    ageGroupEnd: 60,
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    startDate: "Jul 1, 2023",
    endDate: "Jun 30, 2024",
    categories: ["Art & Sensory", "Phonics"],
    classType: "Monthly",
    rating: 0,
    img: "20.jpg",
  },
];
let filteredClassList = [];

$(document).ready(function () {
  updateClassList();
});

// Object to store active filters
let filterObj = {
  ageFilter: [],
  catergoryFilter: [],
  dayFilter: [],
  classTypeFilter: [],
};
// let lastClassInfo = [];
let currPage = 1;
function printClasses() {
  const classContainer = document.getElementById("classes");
  classContainer.innerHTML = "";
  if(currPage === 1){
    disabledBtn('prev');
  }else {
    enabledBtn('prev');
  }
  if( currPage*10 >= filteredClassList.length){
    disabledBtn('next');
  }else {
    enabledBtn('next');
  }
  // currPage === 1 ? currPage*10 >= filteredClassList.length? disabledBtn('next') disabledBtn('prev') : currPage*10 >= filteredClassList.
  // let pageNo = 0;
  for (let i = ((currPage-1)*10); i < Math.min(currPage*10, filteredClassList.length); i++) {
    const element = filteredClassList[i];

    let OrgName = element.OrgName;
    let className = element.className;
    let address = element.address;
    let ageGroupStart = element.ageGroupStart;
    let ageGroupEnd = element.ageGroupEnd;
    let days = element.days;
    let startDate = element.startDate;
    let endDate = element.endDate;
    let categories = element.categories;
    let classType = element.classType;
    let rating = element.rating;
    let img = element.img;

    classContainer.innerHTML += `
        <div class='card mb-3'>
                <div class='row g-0'>
                  <div class='col-lg-3 col-xl-2 align-items-center d-flex'>
                    <img src='/src/${img}' class='img-fluid' alt='Class Thumbnail' />
                  </div>
                  <div class='col-lg-9 col-xl-8'>
                    <div class='card-body'>
                      <p class='class-name mb-1'><small class='text-body-secondary'>${OrgName}</small></p>
                      <h5 class='card-title mb-2'>${className}</h5>
                      <div class='row mb-2'>
                        <div class='col-md-6'>
                          <p class='card-text address mb-1'>${address}</p>
                          <p class='card-text days'>${getDaysString(days)}</p>
                        </div>
                        <div class='col-md-6'>
                          <p class='card-text mb-1'>Age: ${getAgeString(ageGroupStart)} - ${getAgeString(ageGroupEnd)}</p>
                          <p class='card-text mb-0'>${startDate} - ${endDate}</p>
                        </div>
                      </div>
                      <div class='class-category'>
                        <span class='badge rounded-pill'>${categories[0]}</span>
                        <span class='extra-category'>${getCategory(categories)}</span>
                      </div>
                    </div>
                  </div>
                  <div class='col-lg-12 col-xl-2'>
                    <div class='card-body h-100 d-flex flex-column justify-content-between text-end'>
                      <div class='rating'>${giveRating(rating)}</div>
                      <div class='class-type'>
                        <p>${classType}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        `;
    // let cardprinted = i + 1;
    // // debugger;
    // // pageNo = (i + 1) % 10 === 0 ? pageNo + 1 : pageNo;
    // if (cardprinted % 10 === 0) {
    //   pageNo++;
    //   $("#nextBtn").attr("nextPage", pageNo);
    //   $("#prevBtn").attr("prevPage", pageNo - 2);
    //   break;
    // } else if (i < lastClassInfo.length) {
    //   disabledBtn("next");
    // }
  }
  // if (pageNo === 1) {
  //   disabledBtn("prev");
  //   enabledBtn("next");
  // } else {
  //   enabledBtn("prev");
  // }
}

function updateClassList() {
  currPage = 1;
  filteredClassList = classInfo.filter((classIndv) => {
    let ageFilterPass = true;
    let categoryFilterPass = true;
    let dayFilterPass = true;
    let classTypeFilterPass = true;

    if (filterObj.ageFilter.length > 0) {
      ageFilterPass = false;
      let start = filterObj.ageFilter[0];
      let end = filterObj.ageFilter[1];
      if ((start >= classIndv.ageGroupStart && start <= classIndv.ageGroupEnd) || (end >= classIndv.ageGroupStart && end <= classIndv.ageGroupEnd)) {
        ageFilterPass = true;
      }
    }

    if (filterObj.catergoryFilter.length > 0) {
      categoryFilterPass = false;
      filterObj.catergoryFilter.forEach((filter) => {
        if (classIndv.categories.includes(filter)) {
          categoryFilterPass = true;
        }
      });
    }

    if (filterObj.dayFilter.length > 0) {
      dayFilterPass = false;
      filterObj.dayFilter.forEach((filter) => {
        if (classIndv.days.includes(filter)) {
          dayFilterPass = true;
        }
      });
    }

    if (filterObj.classTypeFilter.length > 0) {
      classTypeFilterPass = false;
      filterObj.classTypeFilter.forEach((filter) => {
        if (classIndv.classType === filter) {
          classTypeFilterPass = true;
        }
      });
    }

    if (ageFilterPass && categoryFilterPass && dayFilterPass && classTypeFilterPass) {
      return true;
    }
  });
  if ($("#sortBy").val() === "lowest") {
    filteredClassList.sort((a, b) => {
      return a.rating - b.rating;
    });
  } else if ($("#sortBy").val() === "highest") {
    filteredClassList.sort((a, b) => {
      return b.rating - a.rating;
    });
  }

  printClasses();
}

// Converts array of days to one string
function getDaysString(daysArray) {
  let dayString = "";
  if (daysArray.length === 1) {
    return daysArray[0];
  }
  daysArray.forEach((element) => {
    dayString += element + " ";
  });
  dayString = dayString.slice(0, -1);
  return dayString;
}

// Converts number of months into years and months string
function getAgeString(months) {
  // let ageString = (start / 12 >= 1) ? (start % 12 === 0) ? (` - ${start/12}yrs`) :(` - ${Math.floor(start/12)}yrs ${start%12}Mo` ): ` - ${start%12}Mo`;
  // ageString += (end / 12 >= 1) ? (end % 12 === 0) ? (` - ${end/12}yrs`) :(` - ${Math.floor(end/12)}yrs ${end%12}Mo` ): ` - ${end%12}Mo`;
  let ageString = months / 12 >= 1 ? (months % 12 === 0 ? `${months / 12}yrs` : ` ${Math.floor(months / 12)}yrs ${months % 12}Mo`) : `${months % 12}Mo`;
  return ageString;
}

// Returns the number of categories if there is more than one category available
function getCategory(categories) {
  let noOfCategories = categories.length > 1 ? `+${categories.length - 1}` : ``;
  return noOfCategories;
}

// prints the number of stars as per rating
function giveRating(stars) {
  let starHtml = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= stars) {
      starHtml += `<i class='bi bi-star-fill'></i>`;
    } else {
      starHtml += `<i class='bi bi-star'></i>`;
    }
  }
  return starHtml;
}

// Triggers after clicking filter modal
function updateModal(flag) {
  document.getElementById("modalName").innerText = capitalize(flag);
  document.getElementById("filterModal").setAttribute("data-flag", flag);
  switch (flag) {
    case "age":
      getModalForAge();
      break;

    case "category":
      getModalForCategory();
      break;

    case "day":
      getModalForDay();
      break;

    case "class Type":
      getModalForClassType();
      break;
  }
}

// Triggers when clear button is clicked from modal
function clearFilter() {
  // document.getquerySelectorAll(".active-ageGroup");
  let flag = document.getElementById("filterModal").getAttribute("data-flag");
  switch (flag) {
    case "age":
      document.querySelectorAll(".active-ageGroup").length > 0 ? document.querySelectorAll(".active-ageGroup")[0].classList.remove("active-ageGroup") : "";
      break;
    case "category":
      document.querySelectorAll(".form-check-input").forEach((element) => {
        element.checked = false;
      });
      break;
    case "day":
      document.querySelectorAll(".form-check-input").forEach((element) => {
        element.checked = false;
      });
      break;
    case "class Type":
      document.querySelectorAll(".form-check-input").forEach((element) => {
        element.checked = false;
      });
      break;
  }
}

// Updates modal for age filter
function getModalForAge() {
  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = `
  <div class='row g-3'>
              <div class='col-xl-4 col-lg-6'>
              <button data-value='0-6' class='age-filter-btn'>0 - 6 Months</button>
              </div>
              <div class='col-xl-4 col-lg-6'>
              <button data-value='6-12' class='age-filter-btn'>6 - 12 Months</button>
              </div>
              <div class='col-xl-4 col-lg-6'>
                <button data-value='12-18' class='age-filter-btn'>12 - 18 Months</button>
                </div>
                <div class='col-xl-4 col-lg-6'>
                <button data-value='18-24' class='age-filter-btn'>18 - 24 Months</button>
                </div>
                <div class='col-xl-4 col-lg-6'>
                <button data-value='24-48' class='age-filter-btn'>2 - 4 Years</button>
                </div>
                <div class='col-xl-4 col-lg-6'>
                <button data-value='48-72' class='age-filter-btn'>4 - 6 Years</button>
                </div>
                <div class='col-xl-4 col-lg-6'>
                <button data-value='72-96' class='age-filter-btn'>6 - 8 Years</button>
                </div>
              <div class='col-xl-4 col-lg-6'>
              <button data-value='96-120' class='age-filter-btn'>8 - 10 Years</button>
              </div>
              <div class='col-xl-4 col-lg-6'>
                <button data-value='120-144' class='age-filter-btn'>10 - 12 Years</button>
                </div>
              <div class='col-xl-4 col-lg-6'>
              <button data-value='144-168' class='age-filter-btn'>12 - 14 Years</button>
              </div>
              <div class='col-xl-4 col-lg-6'>
              <button data-value='168-192' class='age-filter-btn'>14 - 16 Years</button>
              </div>
              <div class='col-xl-4 col-lg-6'>
              <button data-value='193-1200' class='age-filter-btn'>&gt;16 Years</button>
              </div>
              </div>
              `;
  if (filterObj.ageFilter.length > 0) {
    // debugger;
    const ageFilterStr = `${filterObj.ageFilter[0]}-${filterObj.ageFilter[1]}`;
    // $('.age-filter-btn').forEach(element => {
    //   console.log(element);
    // });
    $(`[data-value=${ageFilterStr}]`).addClass("active-ageGroup");
    // console.log($('.age-filter-btn').attr('data-value'));
  }
  const ageFilterBtn = document.querySelectorAll(".age-filter-btn");
  ageFilterBtn.forEach(function (button) {
    button.addEventListener("click", function (e) {
      if (document.querySelectorAll(".active-ageGroup").length !== 0) {
        document.querySelectorAll(".active-ageGroup")[0].classList.remove("active-ageGroup");
      }
      e.target.classList.add("active-ageGroup");
    });
  });
}

// Updates modal for category filter
function getModalForCategory() {
  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = `
  <div class='row'>
  <div class='col-6'>
  <input class='form-check-input' type='checkbox' name='category' value='Dance' id='dance'>
  <label class='form-check-label' for='dance'>
    Dance
  </label>
</div>
<div class='col-6'>
  <input class='form-check-input' type='checkbox' name='category' value='Language' id='language'>
  <label class='form-check-label' for='language'>
    Language
  </label>
</div>
<div class='col-6'>
  <input class='form-check-input' type='checkbox' name='category' value='Writing' id='writing'>
  <label class='form-check-label' for='writing'>
    Writing
  </label>
</div>
<div class='col-6'>
  <input class='form-check-input' type='checkbox' name='category' value='Music' id='music'>
  <label class='form-check-label' for='music'>
    Music
  </label>
</div>
<div class='col-6'>
  <input class='form-check-input' type='checkbox' name='category' value='Parent Toddler' id='parentoddler'>
  <label class='form-check-label' for='parentoddler'>
    Parent Toddler
  </label>
</div>
<div class='col-6'>
  <input class='form-check-input' type='checkbox' name='category' value='Story Telling' id='storytelling'>
  <label class='form-check-label' for='storytelling'>
    Story Telling
  </label>
</div>
<div class='col-6'>
  <input class='form-check-input' type='checkbox' name='category' value='STEM' id='stem'>
  <label class='form-check-label' for='stem'>
    STEM
  </label>
</div>
<div class='col-6'>
  <input class='form-check-input' type='checkbox' name='category' value='Coding' id='coding'>
  <label class='form-check-label' for='coding'>
    Coding
  </label>
</div>
<div class='col-6'>
  <input class='form-check-input' type='checkbox' name='category' value='Art & Sensory' id='artsensory'>
  <label class='form-check-label' for='artsensory'>
    Art & Sensory
  </label>
</div>
<div class='col-6'>
  <input class='form-check-input' type='checkbox' name='category' value='Phonics' id='phonics'>
  <label class='form-check-label' for='phonics'>
    Phonics
  </label>
</div>
<div class='col-6'>
  <input class='form-check-input' type='checkbox' name='category' value='Sports & Fitness' id='sportsfitness'>
  <label class='form-check-label' for='sportsfitness'>
    Sports & Fitness
  </label>
</div>
</div>
  `;
  if (filterObj.catergoryFilter.length > 0) {
    filterObj.catergoryFilter.forEach((element) => {
      $(`input[value='${element}']`).attr("checked", "true");
    });
  }
}

// Updates modal for day filter
function getModalForDay() {
  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = `
  <div class='row'>
  <div class='col-6'>
    <input class='form-check-input' type='checkbox' name='day' value='Mon' id='Mon' />
    <label class='form-check-label' for='Mon'> Monday </label>
  </div>
  <div class='col-6'>
    <input class='form-check-input' type='checkbox' name='day' value='Tue' id='Tue' />
    <label class='form-check-label' for='Tue'> Tuesday </label>
  </div>
  <div class='col-6'>
    <input class='form-check-input' type='checkbox' name='day' value='Wed' id='Wed' />
    <label class='form-check-label' for='Wed'> Wednesday </label>
  </div>
  <div class='col-6'>
    <input class='form-check-input' type='checkbox' name='day' value='Thu' id='Thu' />
    <label class='form-check-label' for='Thu'> Thursday </label>
  </div>
  <div class='col-6'>
    <input class='form-check-input' type='checkbox' name='day' value='Fri' id='Fri' />
    <label class='form-check-label' for='Fri'> Friday </label>
  </div>
  <div class='col-6'>
    <input class='form-check-input' type='checkbox' name='day' value='Sat' id='Sat' />
    <label class='form-check-label' for='Sat'> Saturday </label>
  </div>
  <div class='col-6'>
    <input class='form-check-input' type='checkbox' name='day' value='Sun' id='Sun' />
    <label class='form-check-label' for='Sun'> Sunday </label>
  </div>
</div>
  `;
  if (filterObj.dayFilter.length > 0) {
    filterObj.dayFilter.forEach((element) => {
      $(`input[value='${element}']`).attr("checked", "true");
    });
  }
}

// Updates modal for class type filter
function getModalForClassType() {
  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = `
  <div class='row'>
  <div class='col-6'>
    <input class='form-check-input' type='checkbox' name='classType' value='Sessions' id='sessions' />
    <label class='form-check-label' for='sessions'> Sessions </label>
  </div>
  <div class='col-6'>
    <input class='form-check-input' type='checkbox' name='classType' value='Monthly' id='monthly' />
    <label class='form-check-label' for='monthly'> Monthly </label>
  </div>
  <div class='col-6'>
    <input class='form-check-input' type='checkbox' name='classType' value='Weekly' id='weekly' />
    <label class='form-check-label' for='weekly'> Weekly </label>
  </div>
  <div class='col-6'>
    <input class='form-check-input' type='checkbox' name='classType' value='Course' id='course' />
    <label class='form-check-label' for='course'> Course </label>
  </div>
  <div class='col-6'>
    <input class='form-check-input' type='checkbox' name='classType' value='Quarterly' id='quarterly' />
    <label class='form-check-label' for='quarterly'> Quarterly </label>
  </div>
</div>
  `;
  if (filterObj.classTypeFilter.length > 0) {
    filterObj.classTypeFilter.forEach((element) => {
      $(`input[value='${element}']`).attr("checked", "true");
    });
  }
}

// capitalize first letter of word
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Calls when submit button is clicked from modal
function applyFilter() {
  let flag = document.getElementById("filterModal").getAttribute("data-flag");
  switch (flag) {
    case "age":
      filterWithAge();
      break;

    case "category":
      filterWithCategory();
      break;

    case "day":
      filterWithDay();
      break;

    case "class Type":
      filterWithClassType();
      break;
  }
}

// Apply Age filter
function filterWithAge() {
  if ($(".active-ageGroup").length > 0) {
    // console.log($(".active-ageGroup")[0].dataset.value.split("-")[0]);
    let start = $(".active-ageGroup")[0].dataset.value.split("-")[0];
    let end = $(".active-ageGroup")[0].dataset.value.split("-")[1];
    filterObj.ageFilter = [];
    filterObj.ageFilter.push(start);
    filterObj.ageFilter.push(end);
    // debugger;
    $("#age-filter-btn").attr("data-filter", `${start}-${end}`);
    $("#agefilter").html(`${getAgeString(start)} - ${getAgeString(end)} <button><i onclick='clearAgeFilter()' class='bi bi-x'></i></button>`);
    // console.log($("#agefilter"));
    $("#agefilter").css({ display: "inline-block" });
    $("#age-filter-btn").css({ "background-color": "#f99e24", color: "white" });
    updateClassList();
  } else {
    clearAgeFilter();
  }
  $(".btn-close").click();
}

// Apply Category filter
function filterWithCategory() {
  let categories = $("input[name=category]:checked");
  $("#categoryfilter").html("");
  // console.log(categories[0]);
  if (categories.length > 0) {
    filterObj.catergoryFilter = [];
    for (let i = 0; i < categories.length; i++) {
      const element = categories[i];
      // console.log(typeof element.value);
      filterObj.catergoryFilter.push(element.value);
      document.getElementById("categoryfilter").innerHTML += `${element.value}`;
      // debugger;
      document.getElementById("categoryfilter").innerHTML += i === categories.length - 1 ? ` <button><i onclick="clearCategoryFilter()" class="bi bi-x"></i></button>` : "-";
    }
    $("#categoryfilter").css({ display: "inline-block" });
    $("#category-filter-btn").css({ "background-color": "#f99e24", color: "white" });
    updateClassList();
  } else {
    clearCategoryFilter();
  }
  $(".btn-close").click();
}

// Apply Day filter
function filterWithDay() {
  // debugger;
  let days = $("input[name=day]:checked");
  $("#dayfilter").html("");
  if (days.length > 0) {
    filterObj.dayFilter = [];
    for (let i = 0; i < days.length; i++) {
      const element = days[i];
      filterObj.dayFilter.push(element.value);
      document.getElementById("dayfilter").innerHTML += `${element.value}`;
      // debugger;
      document.getElementById("dayfilter").innerHTML += i === days.length - 1 ? ` <button><i onclick="clearDayFilter()" class="bi bi-x"></i></button>` : "-";
    }
    $("#dayfilter").css({ display: "inline-block" });
    $("#day-filter-btn").css({ "background-color": "#f99e24", color: "white" });
    updateClassList();
  } else {
    clearDayFilter();
  }
  $(".btn-close").click();
}

// Apply Class Type filter
function filterWithClassType() {
  let classtypes = $("input[name=classType]:checked");
  $("#classtypefilter").html("");
  if (classtypes.length > 0) {
    filterObj.classTypeFilter = [];
    for (let i = 0; i < classtypes.length; i++) {
      const element = classtypes[i];
      filterObj.classTypeFilter.push(element.value);
      document.getElementById("classtypefilter").innerHTML += `${element.value}`;
      document.getElementById("classtypefilter").innerHTML += i === classtypes.length - 1 ? ` <button><i onclick="clearClassTypeFilter()" class="bi bi-x"></i></button>` : "-";
    }
    $("#classtypefilter").css({ display: "inline-block" });
    $("#classType-filter-btn").css({ "background-color": "#f99e24", color: "white" });
    updateClassList();
  } else {
    clearClassTypeFilter();
  }
  $(".btn-close").click();
}

// Clears applied age filter
function clearAgeFilter() {
  filterObj.ageFilter = [];
  $("#agefilter").css({ display: "none" });
  $("#age-filter-btn").css({ "background-color": "#fff", color: "black" });
  $("#age-filter-btn").removeAttr("data-filter");
  updateClassList();
}

// Clears applied category filter
function clearCategoryFilter() {
  filterObj.catergoryFilter = [];
  $("#categoryfilter").css({ display: "none" });
  $("#category-filter-btn").css({ "background-color": "#fff", color: "black" });
  updateClassList();
}

// Clears applied day filter
function clearDayFilter() {
  filterObj.dayFilter = [];
  $("#dayfilter").css({ display: "none" });
  $("#day-filter-btn").css({ "background-color": "#fff", color: "black" });
  updateClassList();
}

// Clears applied class type filter
function clearClassTypeFilter() {
  filterObj.classTypeFilter = [];
  $("#classtypefilter").css({ display: "none" });
  $("#classType-filter-btn").css({ "background-color": "#fff", color: "black" });
  updateClassList();
}

// Clears all applied filters
function clearAllFilters() {
  clearAgeFilter();
  clearCategoryFilter();
  clearDayFilter();
  clearClassTypeFilter();
}

// Disables button
function disabledBtn(button) {
  if (button === "next") {
    // console.log('next disabled btn');
    $("#nextBtn").attr("disabled", "disabled");
    $("#nextBtn").css("color", "#9b9b9b");
  } else {
    // console.log('previous disabled btn');
    $("#prevBtn").attr("disabled", "disabled");
    $("#prevBtn").css("color", "#9b9b9b");
  }
}

// Enables button
function enabledBtn(button) {
  if (button === "next") {
    // console.log('next enabled btn');
    $("#nextBtn").removeAttr("disabled");
    $("#nextBtn").css("color", "orangered");
  } else {
    // console.log('previous enabled btn');
    $("#prevBtn").removeAttr("disabled");
    $("#prevBtn").css("color", "orangered");
  }
}

function nextBtnClicked() {
  currPage++;
  printClasses();
}

function prevBtnClicked() {
  // let startFrom = $("#prevBtn").attr("prevPage");
  // startFrom = startFrom * 10;
  // updateClassList(startFrom);
  currPage--;
  printClasses()
}
