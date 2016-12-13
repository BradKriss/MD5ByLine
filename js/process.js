function process() {
    var input = document.getElementById("input-field").value;

    var lines = input.split('\n');
    var output = "";

    for(var line = 0; line < lines.length; line++){
        output += md5(lines[line])+"\n";
    }

    document.getElementById("output-field").value = output;

}
