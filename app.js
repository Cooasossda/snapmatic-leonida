const icons = {
  camera: '<path d="M7 5l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"/><circle cx="12" cy="13" r="4"/><path d="M18 8h.01"/>',
  home: '<path d="m3 10 9-7 9 7v9a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2z"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4 4"/>',
  bookmark: '<path d="M6 4h12v17l-6-4-6 4z"/>',
  pin: '<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0z"/><circle cx="12" cy="10" r="2.4"/>',
  sound: '<path d="M3 9h4l5-4v14l-5-4H3zM16 9a4 4 0 0 1 0 6m2-9a8 8 0 0 1 0 12"/>',
  muted: '<path d="M3 9h4l5-4v14l-5-4H3zm13 1 5 5m0-5-5 5"/>',
  up: '<path d="m6 15 6-6 6 6"/>',
  down: '<path d="m6 9 6 6 6-6"/>',
  trend: '<path d="m3 17 6-6 4 4 8-8m-5 0h5v5"/>',
  people: '<circle cx="9" cy="8" r="3"/><path d="M3 20v-2a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v2M16 5a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 4v2"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  heart: '<path d="M20.8 9.2c0 4.3-8.8 10-8.8 10s-8.8-5.7-8.8-10a4.6 4.6 0 0 1 8.8-2 4.6 4.6 0 0 1 8.8 2z"/>',
  comment: '<path d="M21 11.5a8.7 8.7 0 0 1-9 8.5 10 10 0 0 1-3.6-.7L4 21l1.1-4.3a8.2 8.2 0 0 1-2.1-5.2A8.7 8.7 0 0 1 12 3a8.7 8.7 0 0 1 9 8.5z"/>',
  share: '<path d="m21 11-8-7v4C7 8 4 12 3 19c3-4 6-5 10-5v4z"/>',
  play: '<path d="m8 5 12 7-12 7z"/>',
  waveform: '<path d="M3 10v4m4-8v12m5-16v20m5-16v12m4-8v4"/>'
};

function icon(name) {
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + icons[name] + '</svg>';
}

const posts = [
  {
    id: '17', user: 'MonumentMiles', initials: 'MM', color: '#ffc17c', location: 'Vice City',
    title: 'The statue challenge', caption: 'One trick shot. Hundreds of attempts. The horse never even flinched.',
    tag: 'StatueChallenge', likes: 31200, count: 412, duration: '0:16',
    comments: [['@oceanave', 'The fact that you kept the attempt counter going is sending me.'], ['@nightshiftvic', 'The statue gets a better sunset view than my apartment.']]
  },
  {
    id: '26', user: 'LeonidaAfterDark', initials: 'LA', color: '#aff09c', location: 'Vice City',
    title: 'Vice City after dark', caption: 'The night shift gets its own commercial in this town.',
    tag: 'ViceAfterDark', likes: 26800, count: 317, duration: '0:20', format: 'wide',
    comments: [['@oceanave', 'I swear that van has its own fan club.'], ['@sundownleo', 'This is exactly what local TV looks like at 2 a.m.']]
  },
  {
    id: '19', user: 'RevengeLawyer', initials: 'RL', color: '#ff9cbf', location: 'Vice Beach',
    title: 'Legal advice from the passenger seat', caption: 'Was gonna be a quick ride through Vice Beach. Anyway, call my lawyer.',
    tag: 'RevengeLawyer', likes: 24100, count: 368, duration: '0:24',
    comments: [['@oceanave', 'I live on this block and this is exactly how a Tuesday goes.'], ['@sundownleo', 'The passenger seat has better coverage than Weazel.'], ['@littleradio', 'Your lawyer has a comments section??']]
  },
  {
    id: '22', user: 'ViceStreetWatch', initials: 'VS', color: '#cab0ff', location: 'Vice City',
    title: 'Outside the corner store', caption: 'Went inside for a soda. Came back out to the entire block filming.',
    tag: 'OnlyInLeonida', likes: 18300, count: 204, duration: '0:17',
    comments: [['@nightshiftvic', 'I recognize that parking lot from half my feed.'], ['@keyslocals', 'The cashier has definitely seen worse.']]
  },
  {
    id: '15', user: 'ViceMic', initials: 'VM', color: '#bba5ff', location: 'Vice City',
    title: 'Straight from the studio', caption: 'Every studio session in Vice has one story that takes the whole room off track.',
    tag: 'ViceMic', likes: 15600, count: 182, duration: '0:41',
    comments: [['@littleradio', 'Half the city has been telling me this story all week.'], ['@nightshiftvic', 'This is what happens when you leave the mic running.']]
  },
  {
    id: '18', user: 'TerminalTea', initials: 'TT', color: '#8fe0ce', location: 'Vice City International',
    title: 'Airport terminal drama', caption: 'Gate change. Bag fee. Turquoise meltdown. My flight hasn’t even boarded.',
    tag: 'GateCheck', likes: 12700, count: 147, duration: '0:18',
    comments: [['@RunwayRico', 'I know that exact counter.'], ['@oceanave', 'Everyone in line suddenly has somewhere else to look.']]
  },
  {
    id: '24', file: '24-track1', user: 'LeonidaLateTV', initials: 'LT', color: '#f1a1ce', location: 'Leonida',
    title: 'Caught on late-night TV', caption: 'Channel surfing in Leonida always ends somewhere weird.',
    tag: 'LateNightTV', likes: 10800, count: 132, duration: '0:15', format: 'wide',
    comments: [['@PalmState', 'I was about to change the channel and then it got good.']]
  },
  {
    id: '20', user: 'DashcamDani', initials: 'DD', color: '#ffb28b', location: 'Leonida',
    title: 'Passenger seat diaries', caption: 'She asked me to hold the phone. That was my last good decision today.',
    tag: 'LeonidaDrivers', likes: 9700, count: 91, duration: '0:15',
    comments: [['@badexit', 'Remind me to take the bus.'], ['@PalmState', 'Eyes on the road challenge, Leonida edition.']]
  },
  {
    id: '16', user: 'LeonidaRadio', initials: 'LR', color: '#ffa77d', location: 'Leonida',
    title: 'Leonida sound bite', caption: 'A five-second clip from the local audio archive.',
    tag: 'LeonidaAudio', likes: 6400, count: 35, duration: '0:06', format: 'audio',
    comments: [['@littleradio', 'Saving this for the soundboard.']]
  },
  {
    id: '28', user: 'LeonidaRadio', initials: 'LR', color: '#ffa77d', location: 'Leonida',
    title: 'Leonida sound bite, take two', caption: 'Another cut from the Leonida soundboard.',
    tag: 'LeonidaAudio', likes: 5700, count: 26, duration: '0:12', format: 'audio',
    comments: [['@keyslocals', 'The radio clips always end up on my feed.']]
  }
];

const find = (selector) => document.querySelector(selector);
const feed = find('#feed');
const collection = find('#collection');
const dialog = find('#comments');
const commentList = find('#comment-list');
const commentForm = find('#comment-form');
const toast = find('#toast');
const postById = (id) => posts.find((post) => post.id === id);
const compact = new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 });
const settings = { likes: [], following: [], saved: [], comments: {}, muted: true };
const storageKey = 'snapmatic.leonida.v1';

try {
  Object.assign(settings, JSON.parse(localStorage.getItem(storageKey)) || {});
} catch {}

function save() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(settings));
  } catch {}
}

let view;
let activeId;
let commentId;
let resumeAfterComments = false;
let frame;
let toastTimer;

function poster(post) {
  return 'poster-' + (post.file || post.id) + '.jpg';
}

function cover(post) {
  if (post.format === 'audio') return '<span class="audio-cover" aria-hidden="true">' + icon('waveform') + '</span>';
  return '<img alt="" src="' + poster(post) + '">';
}

function avatar(post) {
  return '<span class="avatar" style="--avatar:' + post.color + '" aria-hidden="true">' + post.initials + '</span>';
}

function mine(post) {
  return settings.comments[post.id] || [];
}

function followButton(post) {
  const following = settings.following.includes(post.user);
  return '<button class="pill" data-action="follow" data-user="' + post.user +
    '" aria-label="Follow @' + post.user + '" aria-pressed="' + following + '">' +
    (following ? 'Following' : 'Follow') + '</button>';
}

function reaction(action, glyph, label, count, pressed) {
  const toggle = pressed === undefined ? '' : ' aria-pressed="' + pressed + '"';
  return '<button class="reaction" data-action="' + action + '" aria-label="' + label + '"' + toggle +
    '><span>' + icon(glyph) + '</span><span aria-hidden="true">' + count + '</span></button>';
}

function renderPost(post, loopEnd = false) {
  const liked = settings.likes.includes(post.id);
  const saved = settings.saved.includes(post.id);
  const format = post.format || 'portrait';
  const identity = loopEnd ? 'data-loop-end inert aria-hidden="true"' : 'data-id="' + post.id + '"';
  return '<article class="slide" ' + identity + '><div class="post post-' + format + '" aria-label="' + post.title + '">' +
    (format === 'wide' ? '<div class="wide-backdrop" style="--cover:url(' + poster(post) + ')"></div>' : '') +
    '<video playsinline loop preload="none"' + (format === 'audio' ? '' : ' poster="' + poster(post) + '"') +
    ' data-src="movie-' + (post.file || post.id) + '.mp4" aria-label="' + post.title + '"></video>' +
    (format === 'audio' ? '<div class="audio-art" aria-hidden="true"><span>' + icon('waveform') +
      '</span><strong>Leonida Radio</strong><small>Audio only</small></div>' : '') +
    '<button class="play-area" data-action="play" aria-label="Play video"><span class="play-state">' + icon('play') + '</span></button>' +
    '<div class="post-top"><div class="post-location">' + icon('pin') + post.location + '</div>' +
    '<span class="duration">' + post.duration + '</span></div>' +
    '<div class="post-actions">' +
      reaction('like', 'heart', 'Like video', compact.format(post.likes + Number(liked)), liked) +
      reaction('comment', 'comment', 'Open comments', post.count + mine(post).length) +
      reaction('save', 'bookmark', 'Save video', saved ? 'Saved' : 'Save', saved) +
      reaction('share', 'share', 'Copy link to video', 'Share') +
    '</div><div class="post-copy"><div class="post-user">' + avatar(post) +
      '<strong>@' + post.user + '</strong>' + followButton(post) + '</div>' +
      '<h2>' + post.title + '</h2><p>' + post.caption + '</p>' +
      '<button class="post-tag" data-view="discover" data-query="#' + post.tag + '">#' + post.tag + '</button>' +
    '</div><input type="range" class="timeline" min="0" max="1000" value="0" aria-label="Video progress">' +
    '</div></article>';
}

function renderRail() {
  const featured = postById('26');
  find('#spotlight').innerHTML = '<button class="spotlight-clip" data-open="' + featured.id + '">' + cover(featured) +
    '<span class="spotlight-play">' + icon('play') + '</span><span class="spotlight-caption"><strong>' +
    featured.title + '</strong><small>@' + featured.user + '</small></span></button>';
  find('#trends').innerHTML = [postById('17'), postById('19'), postById('22')].map((post) =>
    '<button class="rail-row" data-view="discover" data-query="#' + post.tag + '"><span class="rail-thumbnail">' + cover(post) + '</span>' +
    '<span><strong>#' + post.tag + '</strong><small>' + compact.format(post.likes) + ' likes</small></span></button>'
  ).join('');
  find('#creators').innerHTML = [postById('17'), postById('15'), postById('26')].map((post) =>
    '<div class="rail-row"><button data-view="discover" data-query="@' + post.user + '">' + avatar(post) +
    '<span><strong>@' + post.user + '</strong><small>' + post.location + '</small></span></button>' + followButton(post) + '</div>'
  ).join('');
}

function empty(title, message, link = '') {
  return '<div class="empty"><h2>' + title + '</h2><p>' + message + '</p>' + link + '</div>';
}

function renderTiles() {
  const grid = find('.tiles');
  const query = (find('#search')?.value || '').trim().toLowerCase();
  const matches = view === 'saved'
    ? posts.filter((post) => settings.saved.includes(post.id))
    : posts.filter((post) => [post.title, post.caption, post.location, '@' + post.user, '#' + post.tag]
      .join(' ').toLowerCase().includes(query));
  grid.innerHTML = matches.map((post) =>
    '<button class="tile" data-open="' + post.id + '">' + cover(post) + '<span class="tile-duration">' +
    (post.format === 'audio' ? icon('waveform') : '') + post.duration + '</span><span class="tile-copy"><strong>' +
    post.title + '</strong><small>@' + post.user + '</small></span></button>'
  ).join('');
  find('#collection-empty').hidden = matches.length > 0;
}

function updateSound() {
  const button = find('.sound');
  button.innerHTML = icon(settings.muted ? 'muted' : 'sound');
  button.setAttribute('aria-label', settings.muted ? 'Unmute' : 'Mute');
  feed.querySelectorAll('video').forEach((video) => { video.muted = settings.muted; });
}

function setView(next, { id, query = '', focusSearch = false } = {}) {
  cancelAnimationFrame(frame);
  feed.querySelectorAll('video').forEach((video) => video.pause());
  view = next;
  activeId = undefined;
  const isFeed = next === 'home' || next === 'following';
  find('.feed-wrap').hidden = !isFeed;
  find('.feed-tabs').hidden = !isFeed;
  find('#topbar-label').hidden = !isFeed;
  find('.sound').hidden = !isFeed;
  find('#view-title').hidden = isFeed;
  collection.hidden = isFeed;
  document.querySelectorAll('.navigation button, .feed-tabs button').forEach((button) => {
    const active = button.dataset.view === next || (next === 'following' && button.matches('.navigation [data-view="home"]'));
    button.classList.toggle('active', active);
    if (active) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
  });

  if (!isFeed) {
    find('.workspace').style.removeProperty('--ambient');
    feed.replaceChildren();
    find('#view-title').textContent = next === 'saved' ? 'Saved videos' : 'Discover Leonida';
    collection.innerHTML = (next === 'discover'
      ? '<label class="search-field">' + icon('search') + '<input id="search" type="search" aria-label="Search clips" placeholder="Creators, places, and hashtags"></label>'
      : '') + '<div class="tiles"></div><div id="collection-empty">' +
      (next === 'saved' ? empty('Nothing saved yet', 'Use the bookmark on a clip to find it here later.') :
        empty('No clips found', 'Try a different creator, place, or hashtag.')) + '</div>';
    if (next === 'discover') {
      find('#search').value = query;
      if (focusSearch) find('#search').focus();
    }
    renderTiles();
    return;
  }

  const list = next === 'following' ? posts.filter((post) => settings.following.includes(post.user)) : posts;
  const loopEnd = next === 'home' && list.length > 1 ? renderPost(list[0], true) : '';
  feed.innerHTML = list.length ? list.map((post) => renderPost(post)).join('') + loopEnd :
    empty('Your Following feed is empty', 'Follow a Leonida creator to see their clips here.',
      '<button class="pill primary" data-view="home">Browse For You</button>');
  collection.replaceChildren();
  feed.scrollTop = 0;
  const selected = list.findIndex((post) => post.id === id);
  if (selected > 0) feed.scrollTop = feed.children[selected].offsetTop - feed.offsetTop;
  updateSound();
  syncActive();
}

function activeSlide() {
  return [...feed.querySelectorAll('.slide[data-id]')].find((slide) => slide.dataset.id === activeId);
}

function syncActive() {
  if (view !== 'home' && view !== 'following') return;
  const slides = [...feed.querySelectorAll('.slide[data-id]')];
  const loopEnd = feed.querySelector('[data-loop-end]');
  if (loopEnd && feed.scrollTop >= loopEnd.offsetTop - feed.offsetTop - 2) {
    // The duplicate lets native swipes snap forward before returning to the real first clip.
    feed.scrollTo({ top: 0, behavior: 'instant' });
    slides[0].querySelector('video').currentTime = 0;
  }

  const index = Math.max(0, Math.min(slides.length - 1, Math.round(feed.scrollTop / (feed.clientHeight || 1))));
  find('[data-action="previous"]').disabled = index === 0;
  find('[data-action="next"]').disabled = !loopEnd && index >= slides.length - 1;
  const slide = slides[index];
  find('#feed-count').textContent = slide ? (index + 1) + ' / ' + slides.length : '';
  const post = postById(slide?.dataset.id);
  find('.workspace').style.setProperty('--ambient', post && post.format !== 'audio' ? 'url(' + poster(post) + ')' : 'none');
  if (!slide || activeId === slide.dataset.id) return;
  activeId = slide.dataset.id;
  for (const item of slides) {
    item.inert = item !== slide;
    const video = item.querySelector('video');
    if (item !== slide) video.pause();
  }
  if (!dialog.open) play(slide.querySelector('video'));
}

function play(video) {
  if (!video.hasAttribute('src')) video.src = video.dataset.src;
  video.play().catch(() => {});
}

function move(direction) {
  const slide = activeSlide();
  if (!slide) return;
  const next = direction < 0 ? slide.previousElementSibling : slide.nextElementSibling;
  if (!next) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  feed.scrollTo({ top: next.offsetTop - feed.offsetTop, behavior: reduced ? 'instant' : 'smooth' });
}

function announce(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.hidden = false;
  toastTimer = setTimeout(() => { toast.hidden = true; }, 2400);
}

function toggle(items, key) {
  const index = items.indexOf(key);
  if (index === -1) items.push(key);
  else items.splice(index, 1);
  save();
  return index === -1;
}

function updateFollowButtons(user, following) {
  document.querySelectorAll('[data-action="follow"]').forEach((button) => {
    if (button.dataset.user !== user) return;
    button.textContent = following ? 'Following' : 'Follow';
    button.setAttribute('aria-pressed', following);
  });
}

function renderComments() {
  const post = postById(commentId);
  commentList.replaceChildren();
  for (const [user, text] of [...post.comments, ...mine(post)]) {
    const row = document.createElement('div');
    row.className = 'comment';
    const handle = document.createElement('strong');
    handle.textContent = user;
    const message = document.createElement('p');
    message.textContent = text;
    row.append(handle, message);
    commentList.append(row);
  }
}

function openComments(post, video) {
  commentId = post.id;
  resumeAfterComments = !video.paused;
  video.pause();
  renderComments();
  commentList.scrollTop = 0;
  dialog.showModal();
}

async function copyLink(post) {
  const link = new URL(location.href);
  link.hash = 'post-' + post.id;
  try {
    await navigator.clipboard.writeText(link.href);
    announce('Link copied');
  } catch {
    window.prompt('Copy this local video link', link.href);
  }
}

function updatePlayback(video) {
  if (!(video instanceof HTMLVideoElement)) return;
  const slide = video.closest('.slide');
  const button = slide.querySelector('.play-area');
  button.setAttribute('aria-label', video.paused ? 'Play video' : 'Pause video');
  button.firstElementChild.hidden = !video.paused;
  const timeline = slide.querySelector('.timeline');
  const progress = video.duration > 0 ? video.currentTime / video.duration : 0;
  timeline.value = progress * 1000;
  timeline.style.setProperty('--position', (progress * 100) + '%');
}

feed.addEventListener('scroll', () => {
  cancelAnimationFrame(frame);
  frame = requestAnimationFrame(syncActive);
});
for (const event of ['play', 'pause', 'timeupdate', 'loadedmetadata']) {
  feed.addEventListener(event, (e) => updatePlayback(e.target), true);
}
feed.addEventListener('error', (e) => {
  if (e.target instanceof HTMLVideoElement && e.target.closest('.slide')?.dataset.id === activeId) {
    announce('This clip could not be played.');
  }
}, true);

document.addEventListener('click', (e) => {
  const button = e.target.closest('button');
  if (!button) return;
  if (button.dataset.view) {
    setView(button.dataset.view, { query: button.dataset.query, focusSearch: button.matches('.search-launch') });
    return;
  }
  if (button.dataset.open) {
    setView('home', { id: button.dataset.open });
    return;
  }
  const slide = button.closest('.slide');
  const post = postById(slide?.dataset.id);
  const video = slide?.querySelector('video');
  switch (button.dataset.action) {
    case 'follow': {
      const user = button.dataset.user;
      const following = toggle(settings.following, user);
      if (!following && view === 'following') {
        const remaining = posts.filter((item) => settings.following.includes(item.user));
        const next = remaining.find((item) => posts.indexOf(item) > posts.indexOf(postById(activeId))) || remaining.at(-1);
        setView('following', { id: next?.id });
      } else {
        updateFollowButtons(user, following);
      }
      announce((following ? 'Following @' : 'Unfollowed @') + user);
      break;
    }
    case 'like': {
      const liked = toggle(settings.likes, post.id);
      button.setAttribute('aria-pressed', liked);
      button.lastElementChild.textContent = compact.format(post.likes + Number(liked));
      break;
    }
    case 'save': {
      const saved = toggle(settings.saved, post.id);
      button.setAttribute('aria-pressed', saved);
      button.lastElementChild.textContent = saved ? 'Saved' : 'Save';
      announce(saved ? 'Added to Saved' : 'Removed from Saved');
      break;
    }
    case 'comment': openComments(post, video); break;
    case 'share': void copyLink(post); break;
    case 'play': if (video.paused) play(video); else video.pause(); break;
    case 'previous': move(-1); break;
    case 'next': move(1); break;
    case 'sound': {
      settings.muted = !settings.muted;
      updateSound();
      save();
      const current = activeSlide()?.querySelector('video');
      if (!settings.muted && current?.paused) play(current);
      break;
    }
    case 'close': dialog.close(); break;
  }
});

document.addEventListener('input', (e) => {
  if (e.target.id === 'search') renderTiles();
  if (e.target.matches('.timeline')) {
    const video = e.target.closest('.slide').querySelector('video');
    if (Number.isFinite(video.duration)) video.currentTime = e.target.valueAsNumber * video.duration / 1000;
  }
});

commentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = commentForm.elements.comment.value.trim();
  if (!message) return;
  settings.comments[commentId] = [...mine(postById(commentId)), ['@you', message]];
  save();
  const slide = activeSlide();
  if (slide?.dataset.id === commentId) {
    const post = postById(commentId);
    slide.querySelector('[data-action="comment"] span:last-child').textContent = post.count + mine(post).length;
  }
  commentForm.reset();
  renderComments();
  commentList.scrollTop = commentList.scrollHeight;
  commentForm.elements.comment.focus();
});

dialog.addEventListener('close', () => {
  commentForm.reset();
  const slide = activeSlide();
  if (resumeAfterComments && slide?.dataset.id === commentId) play(slide.querySelector('video'));
  resumeAfterComments = false;
});

document.addEventListener('keydown', (e) => {
  if (dialog.open || e.ctrlKey || e.metaKey || e.altKey || e.target.matches('input, textarea, [contenteditable]')) return;
  if (e.key === '/') {
    e.preventDefault();
    setView('discover', { focusSearch: true });
  } else if ((view === 'home' || view === 'following') && ['ArrowUp', 'ArrowDown'].includes(e.key)) {
    e.preventDefault();
    move(e.key === 'ArrowUp' ? -1 : 1);
  }
});

function openHash() {
  setView('home', { id: location.hash.match(/^#post-(\d+)$/)?.[1] });
}

document.querySelectorAll('[data-icon]').forEach((element) => element.insertAdjacentHTML('afterbegin', icon(element.dataset.icon)));
renderRail();
openHash();
window.addEventListener('hashchange', openHash);

