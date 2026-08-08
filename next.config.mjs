/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL("https://bjsjaggleivajaqgymsb.supabase.co/**")],
  },
}

export default nextConfig
