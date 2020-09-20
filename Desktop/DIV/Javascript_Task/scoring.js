$(document).ready(function(){
  function score_indicate(){
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    let sum = subject_points.reduce((total, amount) => total + amount);
    $("#sum_indicate").text(sum);

    let ave= sum/subject_points.length;
    $("#average_indicate").text(ave);
  };

  function get_achievement(){
    let averageIndicate = $("#average_indicate").text();
    console.log(averageIndicate)
    if ( averageIndicate >= 80){
      return "A";
    } else if ( averageIndicate >= 60) {
      return "B";
    } else if ( averageIndicate >= 40) {
      return "C";
    } else {
      return "D";
    }
  };

  function get_pass_or_failure(){
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    let number = subject_points.length;
    let judge = "合格";
    let i=0
    while(i<number){
      if(subject_points[i]>60){
        i++;
      }else {
        judge ="不合格";
        return judge;
      }
    }
    return judge;
  };

  function judgement(){
    let achievement = get_achievement();
    let pass_or_failure = get_pass_or_failure();
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${achievement}で${pass_or_failure}です</label>`);
  };

  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });
  $('#btn-evaluation').click(function() {
    $("#evaluation").text(get_achievement());
  });
    $('#btn-judge').click(function() {
    $("#judge").text(get_pass_or_failure());
  });
    $('#btn-declaration').click(function() {
    $('#declaration').empty();
    $('#declaration').text(judgement());
    });
  });
