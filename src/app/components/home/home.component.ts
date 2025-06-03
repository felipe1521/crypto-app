import { Component } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';
import { CommonModule } from '@angular/common';

interface Crypto {
  ath: number,
  ath_change_percentage: number,
  ath_date: string,
  atl: number,
  atl_change_percentage: number,
  atl_date: string,
  circulating_supply: number,
  current_price: number,
  fully_diluted_valuation: number,
  high_24h: number,
  id: string,
  image: string,
  last_updated: string,
  low_24h: number
  market_cap: number
  market_cap_change_24h: number
  market_cap_change_percentage_24h: number,
  market_cap_rank: number,
  max_supply: number,
  name: string,
  price_change_24h: number,
  price_change_percentage_24h: number,
  roi: number | null,
  symbol: string,
  total_supply: number,
  total_volume: number
}

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public cryptos: Crypto[] = [];

  constructor(cryptoService: CryptoService) { 
    cryptoService.getAllCryptos().subscribe({
      next: (data: any) => {
        this.cryptos = data;
        console.log(this.cryptos);
      },
      error: (error: any) => console.error('Error fetching cryptocurrencies:', error)
    });
  }

  convertToCurrency(amount: number): string {
    const formatter = new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
    return formatter.format(amount);
  }

  convertToDate = (date: string): string => new Date(date).toLocaleDateString();

  convertToPercentage = (value: number): string => value.toFixed(2) + '%';
}
