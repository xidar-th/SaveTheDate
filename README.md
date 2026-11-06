# Wedding invitation website

A static, responsive Kerala-inspired celebration invitation from Prabhu and Preetha. The opening uses a wide reception scene for desktop and a centered crop of the couple on phones. The hero uses `assets/reception-v8.webp`, with slightly broader shoulders and chest and no increase to the groom's belly. Separate masks in `styles.css` preserve the approved groom face from `assets/reception-v7.webp` and bride face from `assets/reception-v5-face.webp`. The solo portraits are `assets/bride-v4.webp` and `assets/groom-v3.webp`; the groom has a smaller head and a slightly fuller body. The site uses a rose, plum, and ivory palette, with a marigold garden treatment for Haldi and Sangeet. No installation or build step is required.

## Customize

Edit the `invitation` object at the top of `script.js` to change the names, dates, venues, or family contact. Prabhu C's phone number is intentionally marked as pending. The 21 May 2027 wedding date is tentative and is labeled as such on the site.

Haldi and Sangeet are listed together on 19 May 2027 at Staydium Bungalow Resort, Bilathikkulam, Kozhikode. Timings are pending. The heritage bungalow, garden and poolside description is based on [Staydium's official website](https://staydium.in/); its [celebrations page](https://staydium.in/celebrations/) includes Haldi and Sangeet events. `assets/haldi-garden.webp` is an original decorative illustration, not a photograph of the booked venue or a promise of the actual decor.

All six venue mentions include Google Maps search links. These update from the venue settings in `script.js`, and the HTML contains working fallback links without JavaScript. The header uses a dedicated centre grid column for Ganapathy and a separate navigation row; navigation can scroll horizontally on small screens.

Set `guestMemoriesUrl` in `script.js` to the shared Google Drive folder URL when ready. The camera button then opens the album in a new tab. Until a link is supplied, it displays a coming-soon message. This site does not store uploads; configure the Drive folder's contributor permissions when adding the real link.

## Image generation

The built-in image generation tool was used for these final prompts:

- `assets/groom-v3.webp`: keep the approved solo groom's facial identity and expression, reduce his head size by about 12%, and subtly widen his shoulders, torso and waist; preserve the cream kurta, crossed arms, watch, bare feet and studio setting.
- `assets/reception-v7.webp`: use `groom-v2.webp` as the definitive identity reference for the groom in the group scene, with a naturally sized head; retain the fuller green-kurta body, bride, pose and venue composition. The page preserves the v5 bride's face through its existing overlay.
- `assets/haldi-garden.webp`: an elegant painterly Kerala bungalow garden decorated with yellow and saffron marigolds, cane seats, brass bowls, drapes and string lights; no people or text; an illustrative celebration scene.

The original ambient instrumental is preloaded and attempts to start immediately at 45% volume. Browsers that block unprompted audio will begin playing it on the visitor's first tap, click, or key press; the header also offers a play/pause control. Browser autoplay restrictions cannot be overridden by the page. Regenerate the file with `python3 scripts/generate_ambient.py` if needed.

## Run locally

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000`. The site uses Google Fonts when online and local serif/sans-serif fallbacks when offline.

The supplied and edited images are stills. The hero image stays fixed while petals fall; other sections retain entrance, decorative, and hover animations. It does not depict the couple performing gestures or include a video. Motion is reduced for visitors who request it in their device settings.

The Haldi caption sits on a cream strip below the artwork. The venue website button has been removed; the Maps button remains.
