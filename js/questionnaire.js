/* FUNCTIONS TO HELP WITH SAVING QUESTIONNAIRE VALUES */

// FUNCTION TO UPDATE ACADEMICS VALUE
var academics_value = 0;

// LOCAL VARIABLE TO DISPLAY TOP CURRENT ATTRIBUTE VALUE
var academics_number = $('#academics-number'), container_1;

// CREATE CONTAINER IN HTML
container_1 = $('<span id="current-number_1" class="container"></span>');

// APPEND CONTAINER TO ACADEMICS_NUMBER, WHICH DEALS WITH THE 'ACADEMICS-NUMBER' ID
academics_number.append(container_1);

// APPEND CURRENT VALUE TO CONTAINER TO BE DISPLAYED ON QUESTIONNAIRE PAGE
container_1.append('<span id="val_1">' + "Current Academics Value: " + academics_value +'</span>');

$('.academics-number-button').on('click',function() {
    // get the button that was clicked
    var buttonClicked = $(this).html();

    // store button value into academics_value
    academics_value = buttonClicked;
    console.log("Academics: " + academics_value);

    // update value
    document.getElementById("val_1").textContent="Current Academics Value: " + academics_value;

    didChooseAllValues();
});



// FUNCTION TO UPDATE ATHLETICS VALUE
var athletics_value = 0;

// LOCAL VARIABLE TO DISPLAY TOP CURRENT ATTRIBUTE VALUE
var athletics_number = $('#athletics-number'), container_2;

// CREATE CONTAINER IN HTML
container_2 = $('<span id="current-number_2" class="container"></span>');

// APPEND CONTAINER TO ATHLETICS_NUMBER, WHICH DEALS WITH THE 'ATHLETICS-NUMBER' ID
athletics_number.append(container_2);

// APPEND CURRENT VALUE TO CONTAINER TO BE DISPLAYED ON QUESTIONNAIRE PAGE
container_2.append('<span id="val_2">' + "Current Athletics Value: " + athletics_value +'</span>');

$('.athletics-number-button').on('click',function() {
    // get the button that was clicked
    var buttonClicked = $(this).html();

    // store button value into athletics_value
    athletics_value = buttonClicked;
    console.log("Athletics: " + athletics_value);

    // update value
    document.getElementById("val_2").textContent="Current Athletics Value: " + athletics_value;

    didChooseAllValues();
});



// FUNCTION TO UPDATE LEADERSHIP VALUE
var leadership_value = 0;

// LOCAL VARIABLE TO DISPLAY TOP CURRENT ATTRIBUTE VALUE
var leadership_number = $('#leadership-number'), container_3;

// CREATE CONTAINER IN HTML
container_3 = $('<span id="current-number_3" class="container"></span>');

// APPEND CONTAINER TO LEADERSHIP_NUMBER, WHICH DEALS WITH THE 'LEADERSHIP-NUMBER' ID
leadership_number.append(container_3);

// APPEND CURRENT VALUE TO CONTAINER TO BE DISPLAYED ON QUESTIONNAIRE PAGE
container_3.append('<span id="val_3">' + "Current Leadership Value: " + leadership_value +'</span>');

$('.leadership-number-button').on('click',function() {
    // get the button that was clicked
    var buttonClicked = $(this).html();

    // store button value into leadership_value
    leadership_value = buttonClicked;
    console.log("Leadership: " + leadership_value);

    // update value
    document.getElementById("val_3").textContent="Current Leadership Value: " + leadership_value;

    didChooseAllValues();
});



// FUNCTION TO UPDATE SOCIAL VALUE
var social_value = 0;

// LOCAL VARIABLE TO DISPLAY TOP CURRENT ATTRIBUTE VALUE
var social_number = $('#social-number'), container_4;

// CREATE CONTAINER IN HTML
container_4 = $('<span id="current-number_4" class="container"></span>');

// APPEND CONTAINER TO SOCIAL_NUMBER, WHICH DEALS WITH THE 'SOCIAL-NUMBER' ID
social_number.append(container_4);

// APPEND CURRENT VALUE TO CONTAINER TO BE DISPLAYED ON QUESTIONNAIRE PAGE
container_4.append('<span id="val_4">' + "Current Social Value: " + social_value +'</span>');

$('.social-number-button').on('click',function() {
    // get the button that was clicked
    var buttonClicked = $(this).html();

    // store button value into social_value
    social_value = buttonClicked;
    console.log("Social: " + social_value);

    // update value
    document.getElementById("val_4").textContent="Current Social Value: " + social_value;

    didChooseAllValues();
});



// FUNCTION TO UPDATE PHILANTHROPY VALUE
var philanthropy_value = 0;

// LOCAL VARIABLE TO DISPLAY TOP CURRENT ATTRIBUTE VALUE
var philanthropy_number = $('#philanthropy-number'), container_5;

// CREATE CONTAINER IN HTML
container_5 = $('<span id="current-number_5" class="container"></span>');

// APPEND CONTAINER TO PHILANTRHOPY_NUMBER, WHICH DEALS WITH THE 'PHILANTHROPY-NUMBER' ID
philanthropy_number.append(container_5);

// APPEND CURRENT VALUE TO CONTAINER TO BE DISPLAYED ON QUESTIONNAIRE PAGE
container_5.append('<span id="val_5">' + "Current Philanthropy Value: " + philanthropy_value +'</span>');

$('.philanthropy-number-button').on('click',function() {
    // get the button that was clicked
    var buttonClicked = $(this).html();

    // store button value into philanthropy_value
    philanthropy_value = buttonClicked;
    console.log("Philanthropy: " + philanthropy_value);

    // update value
    document.getElementById("val_5").textContent="Current Philanthropy Value: " + philanthropy_value;

    didChooseAllValues();
});

function didChooseAllValues() {

    var empty = false;
    if (academics_value == 0 || athletics_value == 0 || leadership_value == 0 || social_value == 0 || philanthropy_value == 0) {
        empty = true;
    }

    if (empty) {
        $('.submitbtn').attr('disabled', 'disabled');
    } else {
        $('.submitbtn').removeAttr('disabled');
    }

    console.log("Did I forget to pick a value for at least one attribute? " + empty);
}

// ALPHA EPSILON PI
var alpha_epsilon_pi = {
    name: "Alpha Epsilon Pi",
    academics_value: 5,
    athletics_value: 3,
    leadership_value: 4,
    social_value: 2,
    philanthropy_value: 1,
    homepage: "fratpage/Alpha Epsilon Pi.html"
};
var alpha_epsilon_pi_values = [5, 3, 4, 2, 1];

// SIGMA CHI
var sigma_chi = {
    name: "Sigma Chi",
    academics_value: 3,
    athletics_value: 5,
    leadership_value: 1,
    social_value: 4,
    philanthropy_value: 2,
    homepage: "fratpage/Sigma Chi.html"
};
var sigma_chi_values = [3, 5, 1, 4, 2];

// PHI DELTA THETA
var phi_delta_theta = {
    name: "Phi Delta Theta",
    academics_value: 2,
    athletics_value: 4,
    leadership_value: 1,
    social_value: 3,
    philanthropy_value: 5,
    homepage: "fratpage/Phi Delta Theta.html"
};
var phi_delta_theta_values = [2, 4, 1, 3, 5];

// KAPPA SIGMA
var kappa_sigma = {
    name: "Kappa Sigma",
    academics_value: 1,
    athletics_value: 2,
    leadership_value: 3,
    social_value: 4,
    philanthropy_value: 5,
    homepage: "fratpage/Kappa Sigma.html"
};
var kappa_sigma_values = [1, 2, 3, 4, 5];

// BETA THETA PI
var beta_theta_pi = {
    name: "Beta Theta Pi",
    academics_value: 3,
    athletics_value: 4,
    leadership_value: 5,
    social_value: 2,
    philanthropy_value: 1,
    homepage: "fratpage/Beta Theta Pi.html"
};
var beta_theta_pi_values = [3, 4, 5, 2, 1];

//ALPHA LAMBDA MU
var alpha_lambda_mu = {
    name: "Alpha Lambda Mu",
    academics_value: 1,
    athletics_value: 2,
    leadership_value: 5,
    social_value: 5,
    philanthropy_value: 3,
    homepage: "fratpage/Alpha Lambda Mu.html"
};
var alpha_lambda_mu_values = [1, 2, 5, 5, 3];

//LAMBDA CHI ALPHA
var lambda_chi_alpha = {
    name: "Lambda Chi Alpha",
    academics_value: 4,
    athletics_value: 4,
    leadership_value: 5,
    social_value: 5,
    philanthropy_value: 2,
    homepage: "fratpage/Lambda Chi Alpha.html"
};
var lambda_chi_alpha_values = [4, 4, 5, 5, 2];

//PHI GAMMA DELTA
var phi_gamma_delta = {
    name: "Phi Gamma Delta",
    academics_value: 2,
    athletics_value: 5,
    leadership_value: 1,
    social_value: 4,
    philanthropy_value: 3,
    homepage: "fratpage/Phi Gamma Delta.html"
};
var phi_gamma_delta_values = [2, 5, 1, 4, 3];

//PI KAPPA ALPHA
var pi_kappa_alpha = {
    name: "Pi Kappa Alpha",
    academics_value: 2,
    athletics_value: 5,
    leadership_value: 1,
    social_value: 5,
    philanthropy_value: 1,
    homepage: "fratpage/Pi Kappa Alpha.html"
};
var pi_kappa_alpha_values = [2, 5, 1, 5, 1];

//SIGMA ALPHA EPSILON
var sigma_alpha_epsilon = {
    name: "Sigma Alpha Epsilon",
    academics_value: 5,
    athletics_value: 5,
    leadership_value: 3,
    social_value: 2,
    philanthropy_value: 4,
    homepage: "fratpage/Sigma Alpha Epsilon.html"
};
var sigma_alpha_epsilon_values = [5, 5, 3, 2, 4];

//SIGMA ALPHA MU
var sigma_alpha_mu = {
    name: "Sigma Alpha Mu",
    academics_value: 3,
    athletics_value: 4,
    leadership_value: 4,
    social_value: 2,
    philanthropy_value: 1,
    homepage: "fratpage/Sigma Alpha Mu.html"
};
var sigma_alpha_mu_values = [3, 4, 4, 2, 1];

//SIGMA NU
var sigma_nu = {
    name: "Sigma Nu",
    academics_value: 3,
    athletics_value: 1,
    leadership_value: 5,
    social_value: 4,
    philanthropy_value: 5,
    homepage: "fratpage/Sigma Nu.html"
};
var sigma_nu_values = [3, 1, 5, 4, 5];

//SIGMA PHI EPSILON
var sigma_phi_epsilon = {
    name: "Sigma Phi Epsilon",
    academics_value: 1,
    athletics_value: 2,
    leadership_value: 1,
    social_value: 4,
    philanthropy_value: 2,
    homepage: "fratpage/Sigma Phi Epsilon.html"
};
var sigma_phi_epsilon_values = [1, 2, 1, 4, 2];

//TAU KAPPA EPSILON
var tau_kappa_epsilon = {
    name: "Tau Kappa Epsilon",
    academics_value: 1,
    athletics_value: 1,
    leadership_value: 2,
    social_value: 1,
    philanthropy_value: 5,
    homepage: "fratpage/Tau Kappa Epsilon.html"
};
var tau_kappa_epsilon_values = [1, 1, 2, 1, 5];

//TRIANGLE
var triangle = {
    name: "Triangle",
    academics_value: 4,
    athletics_value: 2,
    leadership_value: 3,
    social_value: 3,
    philanthropy_value: 5,
    homepage: "fratpage/Triangle.html"
};
var triangle_values = [4, 2, 3, 3, 5];


// ARRAY OF EACH OF THE FRAT'S QUESIONNAIRE VALUES
var frat_values = [
  alpha_epsilon_pi_values,
  alpha_lambda_mu_values,
  beta_theta_pi_values,
  kappa_sigma_values,
  lambda_chi_alpha_values,
  phi_delta_theta_values,
  phi_gamma_delta_values,
  pi_kappa_alpha_values,
  sigma_alpha_epsilon_values,
  sigma_alpha_mu_values,
  sigma_chi_values,
  sigma_nu_values,
  sigma_phi_epsilon_values,
  tau_kappa_epsilon_values,
  triangle_values
];

// ARRAY OF EACH OF THE FRAT OBJECTS
var frats = [
  alpha_epsilon_pi,
  alpha_lambda_mu,
  beta_theta_pi,
  kappa_sigma,
  lambda_chi_alpha,
  phi_delta_theta,
  phi_gamma_delta,
  pi_kappa_alpha,
  sigma_alpha_epsilon,
  sigma_alpha_mu,
  sigma_chi,
  sigma_nu,
  sigma_phi_epsilon,
  tau_kappa_epsilon,
  triangle
];

var profiles = JSON.parse(localStorage.getItem("profiles")) || [];

var current_user = localStorage.getItem("current_user");

var user_matches = [];

function findTopThreeFrats() {
  var total_deviation = 20;
  var percent = 100;
  var user_values = [academics_value, athletics_value, leadership_value, social_value, philanthropy_value];

  for (index = 0; index < frats.length; index++) {
    var total = 0;

    for (num = 0; num <user_values.length; num++) {
      total += Math.abs(user_values[num] - frat_values[index][num]);
    }

    var diff_decimal = total / total_deviation;
    var match_decimal = 1 - diff_decimal;

    var match_percent = Math.round(match_decimal * percent);

    var frat_match = {fratName: frats[index].name, matchPercent: match_percent, homepage: frats[index].homepage};
    user_matches.push(frat_match);
  }

  var sorted_matches = user_matches.sort(Comparator);

  for (var user in profiles) {
    if (current_user == profiles[user].email) {
      profiles[user].matches = sorted_matches;
    }
  }

  localStorage.setItem("profiles", JSON.stringify(profiles));
}

function Comparator(a, b) {
  if (a.matchPercent > b.matchPercent) return -1;
  if (a.matchPercent < b.matchPercent) return 1;
  return 0;
}

function showResults() {
// LOCAL VARIABLE TO DISPLAY TOP 3 FRATS AND HANDLE MAGIC NUMBER
var org_name_1 = $('#temp'), container
var top_3 = 3;

var resultsPage = [];

for (user in profiles) {
  if (current_user == profiles[user].email) {
    resultsPage = profiles[user].matches;
  }
}

if (resultsPage.length == 0) {
  container = $('<div id="no_results" class="container"></div>');

  // APPEND CONTAINER TO ORG_NAME_1, WHICH DEALS WITH THE 'TEMP' ID
  org_name_1.append(container);

  // APPEND FRAT NAME AND MATCH PERCENTAGE TO CONTAINER TO BE DISPLAYED ON MATCHES PAGE
  container.append('<p>Please take the questionnaire to get matched.</p>');
} else {
// LOOP TO DISPLAY TOP 3 FRATS
for (var index = 0; index < top_3; index++) {
    // CREATE CONTAINER IN HTML
    container = $('<div id="frat_1" class="container"></div>');

    // APPEND CONTAINER TO ORG_NAME_1, WHICH DEALS WITH THE 'TEMP' ID
    org_name_1.append(container);

    // APPEND FRAT NAME AND MATCH PERCENTAGE TO CONTAINER TO BE DISPLAYED ON MATCHES PAGE
    container.append('<div class="name">' + resultsPage[index].fratName +'</div>');
    container.append('<div class="match_percentage">' + "Match Percentage: " + resultsPage[index].matchPercent + "%" + '</div>');
    container.append('<a href="' + resultsPage[index].homepage + '"> Visit Fraternity Page' + '</a>');
  }
}
}


function showAll() {

  var resultsPage = [];

  for (user in profiles) {
    if (current_user == profiles[user].email) {
      resultsPage = profiles[user].matches;
    }
  }
  /* EXPLORE PAGE JS */
  // LOCAL VARIABLE TO DISPLAY ALL FRATS AND HANDLE MAGIC NUMBER
  var org_name_2 = $('#explore'), container;
  //MARK: enclosed explore in if/else statement to cover if user clicks 'Explore' prior to taking questionnaire
  if (resultsPage.length == 0) {
    container = $('<div id="no_results" class="container"></div>');

    org_name_2.append(container);
    container.append('<p>Please take the questionnaire to get matched.</p>');

  } else {

    for (var index = 0; index < frats.length; index++) {

      container = $('<div id="frat_2" class="container"></div>');

      org_name_2.append(container);

      container.append('<div class="name">' + resultsPage[index].fratName +'</div>');
      container.append('<div class="match_percentage">' + "Match Percentage: " + resultsPage[index].matchPercent + "%" + '</div>');

      container.append('<a href="' + resultsPage[index].homepage + '"> Visit Fraternity Page' + '</a>');
    }
  }
}
