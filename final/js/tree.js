var m = [20, 120, 20, 120],
    w = 960 - m[1] - m[3],
    h = 300 - m[0] - m[2],
    i = 0,
    duration = 500,
    root;

var tree = d3.layout.tree()
    .size([h, w]);

var diagonal = d3.svg.diagonal()
    .projection(function(d) { return [d.y, d.x]; });

var vis = d3.select("#chart").append("svg")
    .attr("width", w + m[1] + m[3])
    .attr("height", h + m[0] + m[2])
  .append("g")
    .attr("transform", "translate(" + m[3] + "," + m[0] + ")");

		d3.json("./includes/flowchart.php", function(json) {
  
	// console.log(json);
	root = json;
  root.x0 = 0;
  root.y0 = w/2;

  function collapse(d) {

		getFlow(d);
		
		for(var i=0; i< root.length; i++){
		//	if (d[i].after.first) {
				d._children = d[i].after.first;
				console.log(d[i]._children);
	      d._children.forEach(collapse);
	      d[i].after = null;
		//	}
			
			root[i].after.first.forEach(collapse);
		  update(root);
		}

  }

	console.log("got data");

});

function getFlow(questionNum) {
	
		//post to/from flow database
		$.post("./includes/flowchart.php", function(data) {
			
			var next1, next2, id;
			
			//loop through the data
			for(var i=0; i<data.length; i++){
				
				//start with the question
				if(data[i].number == questionNum){
					
					if(data[i].after.first == ""){
						//highlight answer
						$("#flow").append("<h3 id='q" + data[i].number+ "' class='answer'>"+data[i].text+"</h3>").fadeIn("slow");
					}else{
						//show next question
						$("#flow").append("<h3 id='q" + data[i].number+ "' class='question'>"+data[i].text+"</h3>").fadeIn("slow");
					}
					
					//get following questions
					next1 = data[i].after.first;
					next2 = data[i].after.second;
					id = data[i].number;
					
				}
				
				//print arrow #1 (check if it belongs to THIS question)
				if(data[i].number == next1 && data[i].before.id == id){
						$("#flow").append("<p id='arrow" + next1 + "' class='arrow'>" + data[i].before.answer + "</p>").fadeIn("slow");
				}
				//print arrow #2 (check if it belongs to THIS question)
				if(data[i].number == next2 && data[i].before.id == id){
						$("#flow").append("<p id='arrow" + next2 + "' class='arrow'>" + data[i].before.answer + "</p>").fadeIn("slow");
						console.log("#arrow"+next2);
				}
			}
			//console.log(data);
			
		},"json");

}

function update(source) {

  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse();

  // Normalize for fixed-depth.
  nodes.forEach(function(d) { d.y = d.depth * 180; });

  // Update the nodes…
  var node = vis.selectAll("g.node")
      .data(nodes, function(d) { return d.id || (d.id = ++i); });

  // Enter any new nodes at the parent's previous position.
  var nodeEnter = node.enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
      .on("click", click);

  nodeEnter.append("circle")
      .attr("r", 1e-6)
      .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

  nodeEnter.append("text")
      .attr("x", function(d) { return d.children || d._children ? -10 : 10; })
      .attr("dy", ".35em")
      .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
      .text(function(d) { return d.name; })
      .style("fill-opacity", 1e-6);

  // Transition nodes to their new position.
  var nodeUpdate = node.transition()
      .duration(duration)
      .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

  nodeUpdate.select("circle")
      .attr("r", 4.5)
      .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

  nodeUpdate.select("text")
      .style("fill-opacity", 1);

  // Transition exiting nodes to the parent's new position.
  var nodeExit = node.exit().transition()
      .duration(duration)
      .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
      .remove();

  nodeExit.select("circle")
      .attr("r", 1e-6);

  nodeExit.select("text")
      .style("fill-opacity", 1e-6);

  // Update the links…
  var link = vis.selectAll("path.link")
      .data(tree.links(nodes), function(d) { return d.target.id; });

  // Enter any new links at the parent's previous position.
  link.enter().insert("path", "g")
      .attr("class", "link")
      .attr("d", function(d) {
        var o = {x: source.x0, y: source.y0};
        return diagonal({source: o, target: o});
      })
    .transition()
      .duration(duration)
      .attr("d", diagonal);

  // Transition links to their new position.
  link.transition()
      .duration(duration)
      .attr("d", diagonal);

  // Transition exiting nodes to the parent's new position.
  link.exit().transition()
      .duration(duration)
      .attr("d", function(d) {
        var o = {x: source.x, y: source.y};
        return diagonal({source: o, target: o});
      })
      .remove();

  // Stash the old positions for transition.
  nodes.forEach(function(d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });
}

// Toggle children on click.
function click(d) {
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }
  update(d);
}
