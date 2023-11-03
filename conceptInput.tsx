import {Grid, Stack, Button, useToast, Dialog, Box, Text, Flex, Autocomplete} from '@sanity/ui'
import {useState} from 'react'

export function ConceptInput(props) {
  const [open, setOpen] = useState(false)
  const [innerOpen, setInnerOpen] = useState(false)
  console.log(props)

  const filter = props.schemaType.options.filter // returns the filter function

  console.log(typeof filter) // function

  const filterExec = filter()

  // returns =>
  //  filter:  "!(_id in path("drafts.**")) && _id in *[_type=="skosConceptScheme" && schemeId == $schemeId].concepts[]._ref
  //                && $branchId in broader[]->conceptId
  //                || $branchId in broader[]->broader[]->conceptId
  //                || $branchId in broader[]->broader[]->broader[]->conceptId
  //                || $branchId in broader[]->broader[]->broader[]->broader[]->conceptId
  //                || $branchId in broader[]->broader[]->broader[]->broader[]->broader[]->conceptId"
  // params: {
  //     branchId: "1e5e6c"
  //     schemeId: "cf76c1"
  // }

  //   console.log('filterExec: ', filterExec)
    console.log('filter: ', filterExec.filter)
    console.log('parame: ', filterExec.params)

  function BrowseHierarchy(props) {
    console.log('click')
    console.log(props)
    setOpen(true)
    // const {onItemAppend} = props

    // const handleAdd = useCallback(() => {
    //   // Adds 'Hello!' to new string items in the array
    //   onItemAppend('Hello!')
    // }, [onItemAppend])

    return <></>
  }
  function BrowseInner(props) {
    console.log('click')
    console.log(props)
    setInnerOpen(true)
    // const {onItemAppend} = props

    // const handleAdd = useCallback(() => {
    //   // Adds 'Hello!' to new string items in the array
    //   onItemAppend('Hello!')
    // }, [onItemAppend])

    return <></>
  }

  return (
    <Stack space={3}>

      {props.renderDefault(props)}

      <Grid columns={1} gap={3}>
        <Button text="Browse Taxonomy Tree" mode="ghost" onClick={BrowseHierarchy} />
      </Grid>
      {open && (
        <Dialog header="Example" id="dialog-example" onClose={() => setOpen(false)} zOffset={800}>
          <Box padding={10}>
            <Text>Content</Text>
            <Grid columns={1} gap={3}>
              <Button text="Browse Taxonomy Tree" mode="ghost" onClick={BrowseInner} />
            </Grid>
            {innerOpen && (
              <Dialog
                header="Example"
                id="dialog-example"
                onClose={() => setInnerOpen(false)}
                zOffset={1000}
              >
                <Box padding={4}>
                  <Text>Inner Content</Text>
                </Box>
              </Dialog>
            )}
          </Box>
        </Dialog>
      )}
    </Stack>
  )
}
