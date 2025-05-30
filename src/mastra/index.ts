import { VercelDeployer } from '@mastra/deployer-vercel';

import { Mastra } from '@mastra/core/mastra';
import { PinoLogger } from '@mastra/loggers';
import { LibSQLStore } from '@mastra/libsql';
import { weatherAgent } from '@/mastra/agents/weather-agent';

export const mastra = new Mastra({
  agents: { weatherAgent },
  storage: new LibSQLStore({
    // stores telemetry, evals, ... into memory storage, if it needs to persist, change to file:../mastra.db
    url: ":memory:",
  }),
  logger: new PinoLogger({
    name: 'Mastra',
    level: 'info',
  }),

  deployer: new VercelDeployer({
    projectName: `Splitwise`,
    token: `qZPjPB3K254QWbBTHdYOnAc4`,
    teamSlug: `weather-agent`
  })
});
