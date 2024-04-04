class Footer extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    this.innerHTML = `
    <footer>
        <hr></hr>
        <div class="badges_container">
            <a rel="noreferrer" href="https://frogmoding.site" title="ur here" alt="frog on a trans flag" target="_blank">
                <img src="/badges/trans frog 88x31.gif">
            </a>

            <a rel="noreferrer" href="https://cyber.dabamos.de/88x31/" title="88x31 badges" alt="88 by 31" target="_blank">
                <img src="/badges/88x31.gif">
            </a>

            <img src="/badges/acab.gif" title="all cops are bastards (especially that family member of yours)" alt="ACAB">

            <img src="/badges/froag.gif" title="froag" alt="drawing of a frog">

            <a rel="noreferrer" href="https://www.marxists.org/archive/marx/works/1848/communist-manifesto/" title="communism will win" alt="click here to crush capitalism" target="_blank">
                <img src="/badges/cc-button.png">
            </a>

            <img src="/badges/tyg.gif" title="diy hrt is cool and good" alt="trans your gender">

            <img src="/badges/queerpride.gif" title="i love queer ppl" alt="queer pride!">

            <a ref="noreferrer" href="https://www.marxists.org" title="i love the democratic republic" alt="the heads of marx, engels and lenin" target="_blank">
              <img src="/badges/M E L heads.png">
            </a>

            <a ref="noreferrer" href="https://www.mozilla.org/en-US/firefox/new/" title="firefox good" alt="tested on firefox" target="_blank">
              <img src="/badges/firefox4.gif">
            </a>

            <img src="/badges/web3.gif" title="i hate web 3.0" alt="keep the web free, say no to web 3">
            
            <a ref="noreferrer" href="https://rinorpb.github.io/" title="peanut butter? power bottom? who knows" alt="pb" target="_blank">
              <img src="/badges/pb.png">
            </a>
        </div>
    </footer>
    `;
  }
}

customElements.define('footer-component', Footer);