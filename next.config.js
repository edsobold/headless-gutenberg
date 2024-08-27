const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
});

const isProduction = process.env.NODE_ENV === 'production';
const prefix = isProduction ? '/docs-template' : '';

const nextConfig = {
    images: {
        unoptimized: true,
    },
    reactStrictMode: true,
    swcMinify: true,
    trailingSlash: true,
    basePath: prefix,
    assetPrefix: prefix,
};

isProduction && (nextConfig.output = 'export');

module.exports = {
    ...withNextra(),
    ...nextConfig,
};
