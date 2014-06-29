#How to install it

```
$git clone https://github.com/Cnetwork/fork2-node-class.git
$(sudo) npm link
```

Uninstall it

```
$ (sudo) npm unlink -g class
unbuild class@0.0.0
```

#Warmup 4 - Implement Class System
---
we do a class constructor   
`mocha verify -R spec -g 'Implement Class Constructor'`

```
Implement Class Constructor
  ✓ should return a class constructor function
  ✓ should be able define a class
  ✓ should be able define a class without constructor
```

`mocha verify -R spec -g 'Implement Instance Methods'`

```
Implement Instance Methods
  ✓ should be able to define methods
  ✓ should not define `initialize` as a method
```