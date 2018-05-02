An example __authority node__ config: [./auth-blue](./auth-blue)

An example __minion node__ config: [./min-green](./min-green)

## Run it

```shell
git clone https://github.com/ETCDEVTeam/sidekick-poc.git
cd sidekick-poc
./setup
./run
```

## Dependencies

- `geth` depends on changes from https://github.com/ethereumproject/go-ethereum/pull/573
- `geth` depends on changes from https://github.com/ethereumproject/go-ethereum/pull/566

- `homerun` @ github.com/ethereumproject/homerun

----

Examples of output are in [chains.stdout](./chains.stdout) and [homerun.log](./homerun.log).
