FROM node:16.18.0 as dependencies
WORKDIR /snappfood
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:16.18.0 as builder
WORKDIR /snappfood
COPY . .
COPY --from=dependencies /snappfood/node_modules ./node_modules
RUN yarn build

FROM node:16.18.0 as runner
WORKDIR /snappfood
ENV NODE_ENV production

COPY --from=builder /snappfood/.env ./
COPY --from=builder /snappfood/next.config.js ./
COPY --from=builder /snappfood/modules.d.ts ./
COPY --from=builder /snappfood/tsconfig.json ./
COPY --from=builder /snappfood/public ./public
COPY --from=builder /snappfood/.next ./.next
COPY --from=builder /snappfood/node_modules ./node_modules
COPY --from=builder /snappfood/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]
