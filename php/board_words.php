<div class="row">
		<div class="col-sm-4">

			<div class="console" id="messageArea">консоль</div>
				 
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
					<img id="emo" src="emoticons/default.png">
				</div>
            
			 <div id="reminderButtonDiv"><h6>Подсказки</h6>
				<button type="button" class="btn btn-outline-primary btn-sm" id="reminderButton">Сущ-ные</button><button type="button" class="btn btn-outline-primary btn-sm" id="reminderButtonColors">Прил-ные</button></div>
			 <div class="border border-primary rounded" id="reminder"></div>
			 <div class="border border-primary rounded" id="reminderColors"></div>
			 

             <div id="centerIt">
                    <form id="searchBox" method="get" action="index.html" class="form-inline">
                        <button class="btn btn-outline-secondary btn-sm" type="button" id="fireButton">Огонь!</button>
    
                        <div class="speech">
								<input onblur="parseAndCorrect(this.value);" oninput="parseAndCorrect(this.value);" type="text" name="s" autocomplete="off" id="guessInput" placeholder=" 简体字" />
								<img onclick="startDictation();" src="microphone.png" id="imgSpeech" data-toggle="tooltip" data-placement="bottom" data-original-title="Говорите!" />
                        </div>
                    </form>
            </div>
		</div>

		<div class="col-sm-8">

			<!-- MODAL -->
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
						<th onClick="replayClick();" id="00" class="replay" data-toggle="tooltip" data-placement="bottom" title="Обновить Игру"></th>
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
                    Как Играть
			</button>

			<button class="btn btn-outline-dark btn-sm" id="sm-margin-bt" type="button" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapseExample">
                    Ввод Голосом
			</button>
			

            
            <div class="collapse" id="collapse0">
                <div class="alert alert-success" role="alert">
                    <p>Для выбора клетки нужно ввести словосочетания типа "прилагательное + 的 + существительное", например, 不好的大学.</p>
                    <p>Для подтверждения ввода просто нажмите клавишу <kbd>Enter</kbd> или кликните кнопку "Огонь!"</p>
                    <p>Чтобы ввести фразы голосом, кликнете пиктограмму микрофона, или нажмите клавишу <kbd>пробел</kbd> (только для браузера Chrome).</p>
                    <hr>
                    <p class="mb-0">Чит-код: чтобы показать расположение кораблей, в консоли браузера введите <code>view.displayShipLocations();</code></p>
                </div>
			</div>

			<div class="collapse" id="collapse2">
				<div class="alert alert-info" role="alert">
					<p>Встроенное распознавание речи на данный момент поддерживается только на браузере Chrome.</p>
					<p>Плюс микрофон можно включать только когда ссылка открыта по <kbd>https://...</kbd> (а не просто http). Чтобы микрофон заработал, нужно разрешить страничке его использовать.</p>
					<p>На смартфонах используйте голосовой ввод самой ОС телефона, это еще проще: на клавиатуре жмите на пиктограмму "микрофона" и диктуйте.</p>
					<img src="img/dictation.png">
					<hr>
					<p>PS: естественно, нужно сначала выбрать "китайский язык / 简体" в качестве языка для диктовки.</p>
				</div>
			</div>

		</div>

	</div>