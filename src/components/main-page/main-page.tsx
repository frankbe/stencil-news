import { Component, h, State } from '@stencil/core';


@Component({
  tag: 'main-page',
  styleUrl: 'main-page.scss'
})
export class MainPage {

  @State() sources: any[];
  @State() articleSrc: string;

  ionViewWillLoad() {
    // this.fetchNews('the-next-web')
  }

  fakeFetch(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();

      request.addEventListener('load', function () {
        resolve(JSON.parse(this.response));
      });

      request.addEventListener('error', function () {
        reject(`error: ${this.statusText} / ${this.status}`);
      });

      request.open('GET', url, true);
      request.send();
    });
  }

  fetchNews(src: string) {
    this.articleSrc = src.replace(/-/g, " ");
    console.log('fetching');
    this.fakeFetch(`https://newsapi.org/v1/articles?source=${src}&apiKey=3f03728668574e6794634e6244b18091`).then((data: any) => {
      console.log(data.articles);
      this.sources = data.articles;
    })
  }

  open(url) {
    window.open(url);
  }

  render() {
    if (!this.sources) {
      return [
        <app-header>
        </app-header>,

        <h3 id='topStories'>Top Story</h3>,

        <div id="card-content">
          <h3>Scientists are now using Wi-Fi to read human emotions</h3>
          <p id="desc">Scientists at MIT are using Wi-Fi and AI to determine your emotional state. They've created an algorithm that can detect and measure individual heartbeats by bouncing RF signals off ...</p>
          <div id="actions">
            <button id="readButton" onClick={() => this.open('https://thenextweb.com/artificial-intelligence/2017/07/22/scientists-create-ai-that-uses-wi-fi-to-see-emotions/#.tnw_LXnzsXrt')}>Read</button>
          </div>
        </div>,

        <h3 id='newsProviders'>News Providers</h3>,

        <div id='loadBlock'>
          <button class='loadButton' onClick={() => this.fetchNews('the-next-web')}>The Next Web</button>
          <button class='loadButton' onClick={() => this.fetchNews('the-verge')}>The Verge</button>
          <button class='loadButton' onClick={() => this.fetchNews('engadget')}>Engadget</button>
        </div>,

        <footer>
          <span>Made with Stencil</span>
        </footer>
      ];
    } else {
      return [
        <app-header>
        </app-header>,

        <div id='sidebar'>
          <h3>Menu</h3>
          <button onClick={() => this.fetchNews('the-next-web')}>Next Web</button>
          <button onClick={() => this.fetchNews('engadget')}>Engadget</button>
          <button onClick={() => this.fetchNews('the-verge')}>The Verge</button>
        </div>,

        <h2>Top stories from {this.articleSrc}</h2>,

        <app-list articles={this.sources}>
        </app-list>,

        <div id='tabs'>
          <button onClick={() => this.fetchNews('the-next-web')}>Next Web</button>
          <button onClick={() => this.fetchNews('engadget')}>Engadget</button>
          <button onClick={() => this.fetchNews('the-verge')}>The Verge</button>
        </div>
      ]
    }
  }
}