// Display greeting message...
function greetMessage() {
    var greeting = '';
    var time = new Date().getHours();

    if (time < 12) {
        greeting = ('Good Morning');
    } else if (time < 18) {
        greeting = ('Good Day');
    } else {
        greeting = ('Good Evening');
    }
    return greeting
  }

  console.log(greetMessage());