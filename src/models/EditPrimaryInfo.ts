export class EditPrimaryInfo {
  imie?: string;
  nazwisko?: string;
  dataurodzenia?: string;
  plec?: string;

  miasto?: string;
  telefon?: string;
  facebook?: string;
  instagram?: string;
  stronaWWW?: string;

  constructor(Imie: string, Nazwisko: string, Data: string, Plec: string, Miasto: string, Telefon: string, Facebook: string, Instagram: string, Strona: string) {
    this.imie = Imie;
    this.dataurodzenia = Data;
    this.nazwisko = Nazwisko;
    this.plec = Plec;
    this.telefon = Telefon;
    this.miasto = Miasto;
    this.instagram = Instagram;
    this.facebook = Facebook;
    this.stronaWWW = Strona;
  }
}
