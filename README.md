 ##Opis
  Aplikacija "NekretninePlus" je veb platforma koja omogućava korisnicima da pregledaju, pretražuju i rezervišu nekretnine na jednostavan i efikasan način. 
 	Glavni cilj ove aplikacije je da korisnicima pruži intuitivan i prijateljski korisnički interfejs putem kojeg mogu istraživati različite vrste nekretnina i obavljati rezervacije sa lakoćom.
 	Jedna od ključnih karakteristika aplikacije "NekretninePlus" je upotreba React biblioteke, što omogućava brzu i efikasnu izradu korisničkog interfejsa, kao i lakše održavanje koda i poboljšanje performansi aplikacije.
 	Kroz aplikaciju "NekretninePlus", korisnici mogu pretraživati raznovrsne nekretnine koristeći različite filtere kao što su tip nekretnine, cena, naziv, i slično. Ovo omogućava korisnicima da pronađu nekretnine koje najbolje odgovaraju njihovim potrebama i preferencijama.
 	Platforma takođe omogućava korisnicima da dodaju nekretnine u svoju listu za rezervaciju, gde mogu pregledati detalje svake nekretnine, izračunati ukupnu cenu rezervacije i na kraju izvršiti rezervaciju nekretnina koje su odabrali.
 	Kroz navigaciju, korisnici mogu lako pristupiti različitim delovima aplikacije, kao što su pregled nekretnina, lista za rezervaciju, informacije o kompaniji i kontakt podaci.
 	Takođe, footer na dnu stranice pruža korisnicima osnovne informacije o autorskim pravima i kontakt podacima i trenutnom vremenu, što doprinosi transparentnosti i poverenju korisnika.

##Instalacija

###React

npm i react-router-dom - Instalira React Router biblioteku koja se koristi za upravljanje navigacijom i rutiranjem u aplikacijama baziranim na React-u.
npm i react-icons - Instalira biblioteku React Icons koja sadrži razne ikone iz popularnih biblioteka (Facebook, Instagram, Twitter, Linkedin, Mapa, Download, Phone...)
npm install react-bootstrap bootstrap - Instalira React-Bootstrap i Bootstrap CSS framework za kreiranje responzivnih i stilizovanih korisnickih interfejsa.
npm i axios - Instalira Axios biblioteku. Preko Axios instance se iz React aplikacije salju HTTP zahtevi serveru.
npm i react-datepicker - Instalira React Datepicker komponentu koja omogućava jednostavno dodavanje polja za unos datuma sa interfejsom za odabir.
npm install --save @emailjs/browser - Instalira EmailJS biblioteku za slanje emailova direktno iz browsera.
npm install --save react-google-charts - Instalira React Google Charts biblioteku koja omogućava jednostavno kreiranje i prikazivanje raznih tipova grafova i dijagrama (usluge grupisane po tipu).
npm i react-csv - Instalira React CSV biblioteku koja omogućava jednostavno preuzimanje podataka u CSV formatu (preuzimanje rezervacija).
###Laravel

composer global require laravel/installer - Instalacija Laravel-a
composer create-project --prefer-dist laravel/laravel - Ova komanda kreira novi direktorijum sa svim potrebnim datotekama za Laravel aplikaciju.
composer require laravel/sanctum - Ova komanda instalira Laravel Sanctum paket. Sanctum omogućava lako kreiranje i upravljanje API tokenima za korisnike.
##Pokretanje projekta

Laravel backend: php artisan serve
React frontend: npm start
##Struktura aplikacije

###React

'src/pages' - Stranice aplikacije: Home, O nama, Nekretnine, Lista želja, Kupovina, Login, Admin, Register
'src/axios-instance/axios-call.js - Sadrzi konfiguraciju Axios instance koja se koristi za slanje HTTP zahteva prema serveru (na adresi: [http://127.0.0.1:8000] )
'src/App.js' - Definise rute i strukturu aplikacije
'src/index.js' - Montiranje glavne App komponente na root element u DOM-u

###Laravel

'app/Http/Controllers' - Sadrzi kontrolere koji definisu ponasanje ruta: AgentController, AuthController, KupovinaController, NekretineController, SearchController
'app/Http/Models' - Sadrzi modele: Agent, Kupovina, Nekretnine i User
'app/Http/Resources' - Sadrzi resurse koji odredjuju koje informacije ce se prikazati korisniku putem API-a: AgentResource, KupovinaResource, NekretnineResource i  UserResource
'routes' - Definicija ruta API-ja
'database' - Migracije i Seeder-i za bazu podataka


##Funkcionalnosti

-Pregled nekretnina: Korisnici mogu da pregledaju dostupne nekretnine za prodaju.

-Registracija i prijava: Korisnici se mogu registrovati i prijaviti na sistem (stranica Login) kako bi mogli da kupili željenu nekretninu.

-Pregled nekretnina: Ulogovani korisnici mogu videti svoje nekretnine koje su dodali u Listu želja.

-Kupovina nekretnine: Ulogovani korisnici, izborom nekretnine, agenta i načina plaćanje mogu kupiti novu nekretninu.

-Preuzimanje podataja o kupovinama Agenta u .csv fajlu: Ulogovani korisnici mogu preuzeti .csv fajl koji sadrzi informacije o svim kupovinama Agenta.

-Promena uloge korisnika u Administratora: Administrator mogu odobriti/odbiti kupovinu korisnika na stranici Admin.

-Pregled svih kupovina na čekanju: Administrator može da vidi pregled svih nekretnina koje su na čekanju.

-Pregled svih kupovina jednog Agenta: Administrator na stranici Admin može videti grafički prikaz kupovina grupisanih po Agentu.

-Odjava: Svi ulogovani korisnici se mogu odjaviti sa sistema.

##Komunikacija izmedju komponenti

'useState' hook se koristi za pracenje stanja komponenti
'useEffect' hook se koristi za slanje HTTP zahteva serveru.
'useForm' custom hook se koristi za upravljanje stanjem forme na stranici Register, Login, Kupovina i ažuriranje polja na formi nakon sto korisnik unese odredjene vrednosti.
Axios se koristi za slanje HTTP zahteva ka serveru.
React Router se koristi za navigaciju izmedju stranica.

##Povezivanje sa bazom podataka

Aplikacija koristi MySQL bazu podataka putem Laravel Eloquent ORM-a. Baza podataka sadrži tabele korisnika, rezervacija, usluga, tipova usluga i termina. Povezivanje sa bazom se vrsi kroz konfiguracioni fajl '.env'
