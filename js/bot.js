function chatBot() {
	
	// current user input
	this.input;
	
	/**
	 * respondTo
	 * 
	 * return nothing to skip response
	 * return string for one response
	 * return array of strings for multiple responses
	 * 
	 * @param input - input chat string
	 * @return reply of chat-bot
	 */
	this.respondTo = function(input) {
	
		this.input = input.toLowerCase();
		
		if(this.match('(hi|hello|hey|hola|howdy)(\\s|!|\\.|$)'))
			return `hi Buddy, I'm Surd Bot. Please type:
				<br><b>1</b> to learn about Data Science
				<br><b>2</b> to view uses of Data Science
				<br><b>3</b> to languages for Data Science
				`;
		
		if(this.match('what[^ ]* up') || this.match('sup') || this.match('how are you'))
			return "this github thing is pretty cool, huh?";

		if(this.match('1') || this.match(1))
			return "Data science is an inter-disciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from many structural and unstructured data. Data science is related to data mining, deep learning and big data";
		
		if(this.match('2') || this.match(2))
			return `
					<p>Some of the Use of Data Science are:</p>
					<ol>
						<li>Improving customer retention by finding out what the triggers of churn might be.</li>
						<li>Improving internal product development processes by looking at points where faolts are most likely to happen.</li>
						<li>Targeting customers with the right sales messages at the right time.</li>
						<li>Informing product development by looking at how people use your products.</li>
						<li>Analyzing customer sentiment on social media.</li>
						<li>Financial modeling.</li>
					</ol>
					`;

		if(this.match('3') || this.match(3))
			return `
					<p>Some Languages for Data Science include:</p>
					<ol>
						<li>Python</li>
						<li>R</li>
						<li>Java</li>
						<li>SQL</li>
						<li>Julia</li>
						<li>Scala</li>
						<li>MATLAB</li>
					</ol>
				`;
		if(this.match('l(ol)+') || this.match('(ha)+(h|$)') || this.match('lmao'))
			return "what's so funny?";
		
		if(this.match('^no+(\\s|!|\\.|$)'))
			return "don't be such a negative nancy :(";
		
		if(this.match('(cya|bye|see ya|ttyl|talk to you later)'))
			return ["alright, see you around", "good teamwork!"];
		
		if(this.match('(dumb|stupid|is that all)'))
			return ["hey i'm just a proof of concept", "you can make me smarter if you'd like"];
		
		if(this.input == 'noop')
			return;
		
		return input + " what?";
	}
	
	/**
	 * match
	 * 
	 * @param regex - regex string to match
	 * @return boolean - whether or not the input string matches the regex
	 */
	this.match = function(regex) {
	
		return new RegExp(regex).test(this.input);
	}
}
