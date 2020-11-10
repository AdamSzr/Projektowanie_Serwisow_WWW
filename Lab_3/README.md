# Lab_3 Obsługa zdarzeń

### Wykorzystane technologie.
* HTML5
* JavaScript

# Część 1

[Link do tresci zadań](https://github.com/kartofelek007/zadania-podstawy/tree/master/3-funkcje/1-zadania)

![Output konsoli po wczytaniu skryptu.](md_img/console_output.png)


# Część 2
### Zdarzenia: **beforeprint**  **afterprint**
- wywoływane są w momencie wyzwolenia opcji "Drukuj", oraz po zamkniąciu dialogu.

![Output konsoli po wczytaniu skryptu.](md_img/print_events.png)

### Zdarzenia: **input**  **focus** **blur**
* input - wykonuje się za każdym razem gdy użytkownik wprowadzi dane (np.pojedyńczy znak). 
* focus - gdy użytkownik będzie miał możliwość wprowadzania danych (np. w input musi pojawić się migająca kreska).
* blur - przeciwieństwo focus, gdy użytkownik zakonczy wpisywanie, i przejdzie do innego elementu(np. kliknie wyślij).
  
![](md_img/input_control.png)<br>
W powyższym przykładzie, gdy zaczniemy wpisywać dane w pole "Password" i len(password) < 8, zmieni się bgcolor tego pola na czerwony,
![](md_img/input_control_red.png)<br>
w przeciwmyn razie bgcolor będzie zielony.
![](md_img/input_control_green.png)<br>

### Zdarzenia: **load**  **error**
W tym przypadku ładuje poprzez element link do css stworzony w JS.
Następnie podpinam go do elementu head.
Gdy operacja przebiegnie pomyślnie uruchamiany jest event 'load', w przeciwnym razie 'error'.
![""](md_img/onload_code.png)
![""](md_img/onload.png)<br>

### Zdarzenia: **copy**  **paste** **cut** 
Powyższe eventy wykorzystałem aby zbudować ramkę, z której nic nie jestesmy w stanie skopiować, wkleić, czy też wyciąć.
![""](md_img/input_no_CVX.png)<br>

### Zdarzenie: **mousemove** **removeEventListener**
Zdarzenie wykorzystałem aby wyswietlić położenie myszy w danym kontenerze.
Dodatkowo zamieściłem przycisk uniemożliwiający dalsze zczytywanie pozycji.

![""](md_img/mouse_pos.png)


