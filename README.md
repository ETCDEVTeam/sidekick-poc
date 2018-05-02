An example __authority node__ config: [./auth-blue](./auth-blue)

An example __minion node__ config: [./min-green](./min-green)

## Run it

```shell
git clone https://github.com/ETCDEVTeam/sidekick-poc.git
cd sidekick-poc
./deps # ensure or install homerun and geth
./cpgeth # copy system geth to this project's subdirectories for use by each node
./ownpath # adjust hardcode from flags.conf files to use your own working directory path
./run

./reset # clear logs and reset chaindata for each node
```

## Dependencies

- `geth` depends on changes from https://github.com/ethereumproject/go-ethereum/pull/573
- `geth` depends on changes from https://github.com/ethereumproject/go-ethereum/pull/566

- `homerun` @ github.com/ethereumproject/homerun

----

Examples of output are in [chains.stdout](./chains.stdout) and [homerun.log](./homerun.log).
