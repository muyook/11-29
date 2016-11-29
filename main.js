// pie chart

google.charts.load('current', {'packages': ['corechart']});

google.charts.setOnLoadCallback(drawChart);

google.charts.setOnLoadCallback(drawChart2);
//start drawing the chart

function drawChart() {

  // create the table that holds  data

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Action');
  data.addColumn('number', 'Hours');
  data.addRows([
    ['A', 2],
    ['B', 9],
    ['C', 12],
    ['D', 6],
    ['F', 1]
  ])

// add style

var options = {
  'title': 'Average Grade on a Test',
  'height': 400,
  'width': 600
};

var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data,options);


} // ends func

// bar chart

google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(drawChart);

// start drawing the chart

function drawChart2() {

  var data = google.visualization.arrayToDataTable([
    ["Disorder", "Percentage of Population", {role: "style"}],
    ["Paranoid", 1.5, "darkred"],
    ["Schizotypal", 3.8, "blue"],
    ["Borderline", 1.5, "lightgray"],
    ["Histrionic", 2, "green"],
    ["Narcissistic", 1, "darkblue"],
    ["Avoidant", 2, "purple"],
    ["Dependent", 0.6, "darkgreen"],
    ["Obsessive-Compulsive", 1, "gray"]
    ]);

  var view = new google.visualization.DataView(data);
    view.setColumns([0,1,
    {
      calc: "stringify",
      sourceColumn: 1,
      type: "string",
      role: "annotation"},
      2]);

  var options = {
    'title': "Prevalence of Personality Disorders",
    height: 400,
    width: 600,
    bar: {groupWidth: "95%"},
    legend: {position: "none"},
  };

  var chart = new google.visualization.BarChart(document.getElementById("chart2_div"));
  chart.draw(view, options );



} // ends func
