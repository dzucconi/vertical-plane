import parameters from 'queryparams';
import fps from 'frame-interval';

window.parameters = parameters;

const DOM = {
  app: document.getElementById('app'),
};

export default () => {
  const { message, amount, speed } = parameters({
    amount: 3,
    speed: 30,
    message: 'We make a star as we make a constellation, by putting its parts together and marking off its boundaries. In short, we do not make stars as we make bricks; not all making is a matter of molding mud. The worldmaking mainly in question here is making not with hands but with minds, or rather with languages or other symbol systems. Yet when I say that worlds are made, I mean it literally […].',
  });

  const tokens = message.split(' ');

  fps(requestAnimationFrame)(speed, () => {
    const staged = tokens.slice(0, amount);

    tokens.push(tokens.shift());

    DOM.app.innerHTML = staged.map(token => `
      <div class='token ${token.match(/star/ig) ? 'token--selected' : ''}'>${token}</div>
    `).join('');
  })();
};
