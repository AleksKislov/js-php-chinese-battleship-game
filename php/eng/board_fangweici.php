<div class="row">
		<div class="col-sm-4">

			<div class="console" id="messageArea">console</div>
			 	<div id="emoAndShips">
					<div class="shipModelsDiv">
						<div class="shipModels"></div>
						<div class="shipModels"></div>
						<div class="shipModels"></div>
					</div>
					<div class="shipModelsDiv">
						<div class="shipModels"></div>
						<div class="shipModels"></div>
						<div class="shipModels"></div>
					</div>
					
					<div class="mediumShipModelsDiv">
						<div class="mediumShipModels"></div>
						<div class="mediumShipModels"></div>
					</div>
					<div class="mediumShipModelsDiv">
						<div class="mediumShipModels"></div>
						<div class="mediumShipModels"></div>
					</div>
					<div class="mediumShipModelsDiv">
						<div class="mediumShipModels"></div>
						<div class="mediumShipModels"></div>
					</div>

					<div class="smallShipModelsDiv">
						<div class="smallShipModels"></div>
					</div>
					<div class="smallShipModelsDiv">
						<div class="smallShipModels"></div>
					</div>
					<div class="smallShipModelsDiv">
						<div class="smallShipModels"></div>
					</div>
					<div class="smallShipModelsDiv">
						<div class="smallShipModels"></div>
					</div>
            	</div>

			<div id="emoticons">
				 <img id="emo" src="img/emoticons/default.png">
			</div>
            
			 <div id="reminderButtonDiv"><h6>Hints</h6>
				<button type="button" class="btn btn-outline-primary btn-sm" id="reminderButton">Objects</button><button type="button" class="btn btn-outline-primary btn-sm" id="reminderButtonColors">Locations</button></div>
			 <div class="border border-primary rounded" id="reminder"></div>
             <div class="border border-primary rounded" id="reminderColors"></div>

             <div id="centerIt">
                    <form id="searchBox" method="get" action="index.html" class="form-inline">
							<button class="btn btn-outline-secondary btn-sm" type="button" id="fireButton">Fire!</button>
		
							<div class="speech">
									<input onblur="parseAndCorrect(this.value);" oninput="parseAndCorrect(this.value);" type="text" name="s" autocomplete="off" id="guessInput" placeholder=" 简体字" />
									<img onclick="startDictation();" src="img/microphone.png" id="imgSpeech" data-toggle="tooltip" data-placement="bottom" data-original-title="Speak!" />
							</div>
					</form>
            </div>
		</div>

		<div class="col-sm-8">

			<!-- GAME OVER MODAL -->
			<div class="modal" tabindex="-1" role="dialog" id="myModal">
					<div class="modal-dialog" role="document">
					  <div class="modal-content">
						<div class="modal-header">
							<h4 class="modal-title">胜利!</h4>
						</div>

						<div class="modal-body">
							<div id="gameOver">
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- END OF MODAL -->

			<div id="tableBoard">
                    
				<table class="table"> 
						<colgroup></colgroup>
						<colgroup></colgroup>
						<colgroup></colgroup>
						<colgroup></colgroup>
						<colgroup></colgroup>
						<colgroup></colgroup>
						<colgroup></colgroup>
						<colgroup></colgroup>
						<colgroup></colgroup>
						<colgroup></colgroup>
					<tr>
						<th onClick="replayClick();" id="00" class="replay" data-toggle="tooltip" data-placement="bottom" title="Refresh the Game"></th>
						<th id="01" style="text-align:center"></th>
						<th id="02" style="text-align:center"></th>
						<th id="03" style="text-align:center"></th>
						<th id="04" style="text-align:center"></th>
						<th id="05" style="text-align:center"></th>
						<th id="06" style="text-align:center"></th>
						<th id="07" style="text-align:center"></th>
						<th id="08" style="text-align:center"></th>
						<th id="09" style="text-align:center"></th>
					</tr>
					<tr>
						<th id="10"></th>
						<td id="11"></td>
						<td id="12"></td>
						<td id="13"></td>
						<td id="14"></td>
						<td id="15"></td>
						<td id="16"></td>
						<td id="17"></td>
						<td id="18"></td>
						<td id="19"></td>
					</tr>
					<tr>
						<th id="20"></th>
						<td id="21"></td>
						<td id="22"></td>
						<td id="23"></td>
						<td id="24"></td>
						<td id="25"></td>
						<td id="26"></td>
						<td id="27"></td>
						<td id="28"></td>
						<td id="29"></td>
					</tr>
					<tr>
						<th id="30"></th>
						<td id="31"></td>
						<td id="32"></td>
						<td id="33"></td>
						<td id="34"></td>
						<td id="35"></td>
						<td id="36"></td>
						<td id="37"></td>
						<td id="38"></td>
						<td id="39"></td>
					</tr>
					<tr>
						<th id="40"></th>
						<td id="41"></td>
						<td id="42"></td>
						<td id="43"></td>
						<td id="44"></td>
						<td id="45"></td>
						<td id="46"></td>
						<td id="47"></td>
						<td id="48"></td>
						<td id="49"></td>
					</tr>
					<tr>
						<th id="50"></th>
						<td id="51"></td>
						<td id="52"></td>
						<td id="53"></td>
						<td id="54"></td>
						<td id="55"></td>
						<td id="56"></td>
						<td id="57"></td>
						<td id="58"></td>
						<td id="59"></td>
					</tr>
					<tr>
						<th id="60"></th>
						<td id="61"></td>
						<td id="62"></td>
						<td id="63"></td>
						<td id="64"></td>
						<td id="65"></td>
						<td id="66"></td>
						<td id="67"></td>
						<td id="68"></td>
						<td id="69"></td>
					</tr>
					<tr>
						<th id="70"></th>
						<td id="71"></td>
						<td id="72"></td>
						<td id="73"></td>
						<td id="74"></td>
						<td id="75"></td>
						<td id="76"></td>
						<td id="77"></td>
						<td id="78"></td>
						<td id="79"></td>
					</tr>
					<tr>
						<th id="80"></th>
						<td id="81"></td>
						<td id="82"></td>
						<td id="83"></td>
						<td id="84"></td>
						<td id="85"></td>
						<td id="86"></td>
						<td id="87"></td>
						<td id="88"></td>
						<td id="89"></td>
					</tr>
					<tr>
						<th id="90"></th>
						<td id="91"></td>
						<td id="92"></td>
						<td id="93"></td>
						<td id="94"></td>
						<td id="95"></td>
						<td id="96"></td>
						<td id="97"></td>
						<td id="98"></td>
						<td id="99"></td>
					</tr>
                </table> 

            </div>
			
			
            <button class="btn btn-outline-info btn-sm" id="sm-margin-bt" type="button" data-toggle="collapse" data-target="#collapse0" aria-expanded="false" aria-controls="collapseExample">
                    How to Play
			</button>

			<button class="btn btn-outline-dark btn-sm" id="sm-margin-bt" type="button" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapseExample">
                    Voice Input
			</button>
			
			<button class="btn btn-outline-success btn-sm" id="sm-margin-bt" type="button" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapseExample">
                    All Objects
			</button>

			<div class="collapse" id="collapse1">
					<div class="card">
						<div class="card-body" id="allAnimals">
						</div>
					</div>
			</div>
            
            <div class="collapse" id="collapse0">
					<div class="alert alert-success" role="alert">
						<p>In order to choose a cell you need to input an answer for questions like {object}在哪里 or 哪里有{object}, e.g. phrases like "大象在桌子上面" or "盒子里面有猫".</p>
						<p>ACHTUNG: use two-character location nouns, for instance 上面 or 里面, but not single character ones, like 上 or 里.</p>
						<p>To confirm your input press the <kbd>Enter</kbd> key or click the "Fire!" button.</p>
						<p>In order to use voice input either click the microphone pictogram or press the <kbd>space</kbd> key (It works only with the Chrome).</p>
						<hr>
						<p class="mb-0">Cheat Code: in order to display ships locations in a browser console type in <code>view.displayShipLocations();</code></p>
					</div>
			</div>
	
				<div class="collapse" id="collapse2">
					<div class="alert alert-info" role="alert">
						<p>Embedded voice recognition at the moment is supported only by the Google Chrome browser.</p>
						<p>Moreover, the microphone works only with the <kbd>https://...</kbd> protocol type (mere http won't do). If you want to use the microphone, allow the page to use it.</p>
						<p>While using smartphones it's more convenient to use voice recognition pre-installed on a mobile OS: just press the microphone pictogram on mobile keyboard and dictate.</p>
						<img src="img/dictation.png">
						<hr>
						<p>PS: of course, firstly you need to select "Chinese language / 简体" as a language for dictation.</p>
					</div>
			</div>

		</div>

	</div>