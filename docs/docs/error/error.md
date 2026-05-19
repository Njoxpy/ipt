## Error

### error 1 19 may 2026

- mixing instead of using `app.use("/api/v1/students", studentRoutes);` I used `app.route("/api/v1/students", studentRoutes);`

### error 2

- Cast to ObjectId failed for value "{ \_id: { id: 'me' } }" (type Object) at path "\_id" for model "logs"

```js
const GetLog = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Enter valid log" });
    }

    const log = await Logbook.findById(id);

    if (!log) {
      return res.status(404).json({ message: "Log not found!" });
    }

    res.status(200).json({ message: log });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error." });
  }
};
```

### error 3

- `Cannot destructure property 'dayOfTheWeek' of 'req.body' as it is undefined.` I forgot to add `app.use(express.json());` into express js entry point
