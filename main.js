const content = {
    images: [
        {
            text: 'PHP',
            link: '/php',
            source: 'https://rawgit.com/banianhost/docker-php/master/README.md'
        },
        // {
        //     text: 'Node',
        //     link: '/node',
        //     source: 'https://rawgit.com/banianhost/docker-node/master/README.md'
        // },
        // {
        //     text: 'Node Headless Chrome',
        //     link: '/php',
        //     source: 'https://rawgit.com/banianhost/node-headless-chrome/master/README.md'
        // },
        {
            text: 'Cache Mirror',
            link: '/cache-mirror',
            source: 'https://rawgit.com/banianhost/docker-cache-mirror/master/README.md'
        },
        {
            text: 'Nginx Extras',
            link: '/nginx-extras',
            source: 'https://rawgit.com/banianhost/docker-nginx-extras/master/README.md'
        },
        {
            text: 'Remux',
            link: '/remux',
            source: 'https://rawgit.com/banianhost/docker-remux/master/README.md'
        },
        {
            text: 'Nginx HLS',
            link: '/nginx-hls',
            source: 'https://rawgit.com/banianhost/docker-nginx-hls/master/README.md'
        },
        {
            text: 'Local DNS',
            link: '/localdns',
            source: 'https://rawgit.com/banianhost/docker-localdns/master/README.md'
        },
    ],
    tools: [
        {
            text: 'µCI',
            link: '/uci',
            source: 'https://rawgit.com/banianhost/uci/master/README.md'
        },
    ]
}

// -----------------------------------------------------------------------------

const allContent = Array.prototype.concat.apply([], Object.values(content))

const doc = new Docute.default({
    routerMode: 'history',
    getSource: function (route) {
        const m = allContent.find(r => r.link === route.path)
        return m ? m.source : undefined
    },
    nav: [
        { text: 'Images', link: '/' },
    ],
    sidebar: [
        {
            text: 'Docker Images',
            children: content.images
        },
        {
            text: 'Tools',
            children: content.tools
        }
    ]
})

doc.start()
