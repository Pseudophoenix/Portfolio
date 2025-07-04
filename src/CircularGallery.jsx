import React, { useEffect } from 'react';
import './CircularGallery.css';

function CircularGallery() {
    let base = 'unsplash.com/photo';
    let data = [
        {
            common: 'Lion',
            binomial: 'Panthera leo',
            photo: {
                code: '1583499871880-de841d1ace2a',
                page: 'lion-lying-on-brown-rock-MUeeyzsjiY8',
                text: 'lion couple kissing on a brown rock',
                pos: '47% 35%',
                by: 'Clément Roy'
            }
        },
        {
            common: 'Asiatic elephant',
            binomial: 'Elephas maximus',
            photo: {
                code: '1571406761758-9a3eed5338ef',
                page: 'shallow-focus-photo-of-black-elephants-hZhhVLLKJQ4',
                text: 'herd of Sri Lankan elephants walking away from a river',
                pos: '75% 65%',
                by: 'Alex Azabache'
            }
        },
        {
            common: 'Red-tailed black cockatoo',
            binomial: 'Calyptorhynchus banksii',
            photo: {
                code: '1619664208054-41eefeab29e9',
                page: 'black-and-brown-bird-in-close-up-photography-LkrOEupiVt8',
                text: 'close-up of a black cockatoo',
                pos: '53% 43%',
                by: 'David Clode'
            }
        },
        {
            common: 'Dromedary',
            binomial: 'Camelus dromedarius',
            photo: {
                code: '1662841238473-f4b137e123cb',
                page: 'a-group-of-camels-in-a-desert-uIzCnO-gOrw',
                text: 'camel and her new born calf walking in the Sahara desert',
                pos: '65% 65%',
                by: 'Moaz Tobok'
            }
        },
        {
            common: 'Polar bear',
            binomial: 'Ursus maritimus',
            photo: {
                code: '1589648751789-c8ecb7a88bd5',
                page: 'polar-bear-on-snow-covered-ground-during-daytime-AZ31hv9kdzE',
                text: 'polar bear on the snow, by the water, raised on the hind legs, front paws together',
                pos: '50% 25%',
                by: 'Hans-Jurgen Mager'
            }
        },
        {
            common: 'Waterbuck',
            binomial: 'Kobus ellipsiprymnus',
            photo: {
                code: '1662187554571-f54ea9657d88',
                page: 'a-deer-with-antlers-in-a-field-jVvl_2cQO5s',
                text: 'waterbuck in a field, looking at the camera',
                pos: '47%',
                by: 'Jonathan Gensicke'
            }
        },
        {
            common: 'Giant panda',
            binomial: 'Ailuropoda melanoleuca',
            photo: {
                code: '1659540181281-1d89d6112832',
                page: 'a-panda-bear-in-a-tree-e0mrn3XDatU',
                text: 'giant panda hanging from a tree branch',
                pos: '47%',
                by: 'Jiachen Lin'
            }
        },
        {
            common: 'Grévy\'s zebra',
            binomial: 'Equus grevyi',
            photo: {
                code: '1526095179574-86e545346ae6',
                page: 'zebra-standing-on-wheat-field-ZqYPM8i60F8',
                text: 'zebra standing on wheat field, looking back towards the camera',
                pos: '65% 35%',
                by: 'Jeff Griffith'
            }
        },
        {
            common: 'Cheetah',
            binomial: 'Acinonyx jubatus',
            photo: {
                code: '1541707519942-08fd2f6480ba',
                page: 'leopard-sitting-on-grass-field-3pekyY0-yOw',
                text: 'cheetah sitting in the grass under a blue sky',
                by: 'Mike Bird'
            }
        },
        {
            common: 'King penguin',
            binomial: 'Aptenodytes patagonicus',
            photo: {
                code: '1595792419466-23cec2476fa6',
                page: 'white-and-black-penguin-on-gray-rock-o4snRPEZRRs',
                text: 'king penguin with a fluffy brown chick on grey rocks',
                pos: '35%',
                by: 'Martin Wettstein'
            }
        },
        {
            common: 'Red panda',
            binomial: 'Ailurus fulgens',
            photo: {
                code: '1689799513565-44d2bc09d75b',
                page: 'a-red-panda-is-sitting-in-a-tree-oVNDSIUQrdc',
                text: 'a red panda in a tree',
                by: 'Niels Baars'
            }
        },
        {
            common: 'Leopard',
            binomial: 'Panthera pardus',
            photo: {
                code: '1651611136918-a8a2f8bba419',
                page: 'a-leopard-lying-on-a-rock-VDESlNV85qE',
                text: 'pensive young leopard on a rock',
                pos: '43% 47%',
                by: 'Andy Silby'
            }
        },
        {
            common: 'Hyacinth macaw',
            binomial: 'Anodorhynchus hyacinthinus',
            photo: {
                code: '1624210146024-1046a266038e',
                page: 'blue-and-yellow-macaw-on-brown-tree-branch-during-daytime-wKFd2EhyRAY',
                text: 'two hyacinth macaws on a tree branch',
                pos: '65% 35%',
                by: 'Juliana e Mariana Amorim'
            }
        },
        {
            common: 'Red kangaroo',
            binomial: 'Osphranter rufus',
            photo: {
                code: '1567600868213-60eb570ae39f',
                page: 'brown-kangaroo-eziyddL2OR4',
                text: 'kangaroo in the grass',
                by: 'Jordyn Montague'
            }
        },
        {
            common: 'Snow leopard',
            binomial: 'Panthera uncia',
            photo: {
                code: '1639231554431-ebce02bdeacc',
                page: 'a-snow-leopard-sitting-on-top-of-a-rock-JXECZL83E6M',
                text: 'snow leopard sitting on top of a rock, its big fluffy tail hanging down',
                pos: '50% 25%',
                by: 'Simon Schwyter'
            }
        },
        {
            common: 'Sumatran orangutan',
            binomial: 'Pongo abelii',
            photo: {
                code: '1723979757235-73c4767ced1d',
                page: 'a-close-up-of-a-monkey-with-a-smile-on-its-face-uLkwLM7Uw48',
                text: 'close-up of a pensive male orangutan',
                by: 'Fahrul Razi'
            }
        },
        {
            common: 'Tiger',
            binomial: 'Panthera tigris',
            photo: {
                code: '1500467525088-aafe28c0a95e',
                page: 'selective-focus-of-tiger-laying-on-ground-LNSIGPuZXIg',
                text: 'close-up of a pensive tiger lying on the ground',
                pos: '57%',
                by: 'Frida Lannerström'
            }
        },
        {
            common: 'Brown bear',
            binomial: 'Ursus arctos',
            photo: {
                code: '1692373202439-4b13694c8a68',
                page: 'a-brown-bear-standing-in-the-middle-of-a-forest-ErfqBlV3AEo',
                text: 'brown bear in the forest, sticking tongue out',
                pos: '43% 35%',
                by: 'Alexandru-Bogdan Ghita'
            }
        },
    ];
    let n = data.length;
    useEffect(() => {
        function f(k) {
            if (Math.abs(k) > 0.5) {
                scrollTo(
                    0,
                    (0.5 * (k - Math.sign(k) + 1) *
                        (document.documentElement.offsetHeight - window.innerHeight))
                );
            }
        }

        f(-1);

        const scrollHandler = () =>
            f(+getComputedStyle(document.body).getPropertyValue('--k'));

        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    return (
        <>
            <svg width="0" height="0" aria-hidden="true">
                <filter id="grain">
                    <feTurbulence type="fractalNoise" baseFrequency="7.13" />
                    <feColorMatrix type="saturate" values="0" />
                    <feComponentTransfer>
                        <feFuncA type="linear" slope=".02" />
                    </feComponentTransfer>
                    <feBlend in2="SourceGraphic" />
                </filter>
            </svg>

            <header>
                <h1>Infinite scroll circular gallery</h1>
                <strong>scroll up & down/ use up & down arrow keys</strong>
                <em>mostly CSS scroll-driven animations (for rotating gallery on scroll) + tiniest bit of JS (for infinite cycling part, ~200 bytes minified)</em>
            </header>

            <main className="scene">
                <section className="assembly">
                    {data.map((c, i) => {
                        const img = c.photo;
                        const pos = img.pos ? `; --pos: ${img.pos}` : '';
                        const url = `https://images.${base}-${img.code}?h=900`;

                        return (
                            <article
                                key={i}
                                style={{
                                    '--i': i,
                                    '--url': `url(${url})${pos}`
                                }}
                            >
                                <header>
                                    <h2>{c.common}</h2>
                                    <em>{c.binomial}</em>
                                </header>
                                <figure>
                                    <img src={url} alt={img.text} />
                                    <figcaption>
                                        by <a href={`https://${base}s/${img.page}`} target="_blank" rel="noopener noreferrer">{img.by}</a>
                                    </figcaption>
                                </figure>
                            </article>
                        );
                    })}
                </section>
            </main>

            <footer></footer>

            <aside>
                <p className="box-info-scrollani">
                    Sorry, your browser does not appear to support scroll-driven animation. As of January 2025, this is supported in Firefox if the
                    <kbd>layout.css.scroll-driven-animations.enabled</kbd> flag is set to true in
                    <kbd>about:config</kbd> and in Chromium browsers. Safari support is coming, but it hasn't arrived yet.
                </p>
            </aside>
        </>
    );
}

export default CircularGallery;