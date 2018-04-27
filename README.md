An example __authority node__ config: [./auth-blue](./auth-blue)
An example __minion node__ config: [./min-gree](./min-green)

## Run it

- depends on changes from https://github.com/ethereumproject/go-ethereum/pull/573
- depends on changes from https://github.com/ethereumproject/go-ethereum/pull/566

The /_chain_/geth binaries are for Darwin. To rebuild them just do like normal from the go package path, then `cd sidekick-poc && for d in ./*-*; do cp $(which geth) "$d"/geth; done`


```shell
# Install, or, if you hit errors, make sure you're up to date.
go get github.com/ethereumproject/homerun/...

cd $GOPATH/src/github.com/ethereumproject/homerun
go build -o homerun main.go && mv homerun $GOPATH/bin/

```

```
git clone https://github.com/ETCDEVTeam/sidekick-poc.git

# Replace all my personal hardcoded paths.
# You want to replace '/Users/ia/dev/sidekick/poc' with your current 'sidekick-poc' WD.
# I would type you up a nice sed example but I can't figure out backslashes on this damn japanese keyboard.

cd sidekick-poc
homerun -dir . -excludedirs=".git,sidekick.d"
```

Examples of output are in [chains.stdout](./chains.stdout) and [homerun.log](./homerun.log).
